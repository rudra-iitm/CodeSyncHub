import { fork } from "node-pty"

const SHELL = "bash"

export class TerminalManager {
  sessions = {}

  constructor() {
    this.sessions = {}
  }

  createPty(id, replId, onData) {
    let term = fork(SHELL, [], {
      cols: 100,
      name: "xterm",
      cwd: `/workspace`
    })

    term.on("data", data => onData(data, term.pid))
    this.sessions[id] = {
      terminal: term,
      replId
    }
    term.on("exit", () => {
      delete this.sessions[term.pid]
    })
    return term
  }

  write(terminalId, data) {
    this.sessions[terminalId]?.terminal.write(data)
  }

  clear(terminalId) {
    this.sessions[terminalId].terminal.kill()
    delete this.sessions[terminalId]
  }
}
