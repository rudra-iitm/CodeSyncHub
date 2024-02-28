import { Server } from "socket.io"
import { saveToS3 } from "./aws"
import { fetchDir, fetchFileContent, saveFile } from "./fs"
import { TerminalManager } from "./pty"

const terminalManager = new TerminalManager()

export function initWs(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })

  io.on("connection", async socket => {

    const host = socket.handshake.headers.host
    
    const replId = host?.split(".")[0]

    if (!replId) {
      socket.disconnect()
      terminalManager.clear(socket.id)
      return
    }

    socket.emit("loaded", {
      rootContent: await fetchDir("/workspace", "")
    })

    initHandlers(socket, replId)
  })
}

function initHandlers(socket, replId) {
  socket.on("disconnect", () => {
    console.log("user disconnected")
  })

  socket.on("fetchDir", async (dir, callback) => {
    const dirPath = `/workspace/${dir}`
    const contents = await fetchDir(dirPath, dir)
    callback(contents)
  })

  socket.on("fetchContent", async ({ path: filePath }, callback) => {
    const fullPath = `/workspace/${filePath}`
    const data = await fetchFileContent(fullPath)
    callback(data)
  })

  socket.on("updateContent", async ({ path: filePath, content }) => {
    const fullPath = `/workspace/${filePath}`
    await saveFile(fullPath, content)
    await saveToS3(`code/${replId}`, filePath, content)
  })

  socket.on("requestTerminal", async () => {
    terminalManager.createPty(socket.id, replId, (data, id) => {
      socket.emit("terminal", {
        data: Buffer.from(data, "utf-8")
      })
    })
  })

  socket.on("terminalData", async ({ data }) => {
    terminalManager.write(socket.id, data)
  })
}
