// import React from 'react'
import { useEffect, useState } from "react"
import logo from "../assets/code-editor-favicon-white.png"
import CodeEditor from "./CodeEditor"
import Terminal from "./Terminal"
import Webview from "./Webview"

const Editor = () => {
  const [maxWidth, setMaxWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  useEffect(() => {
    const editorArea = document.querySelector("#editorArea");
    const editorRect = editorArea?.getBoundingClientRect();
    if (editorRect?.bottom && editorRect?.top) {
      const Height = editorRect?.bottom-editorRect?.top;
      setMaxHeight(2*Height/3);
    }
    if (editorRect?.right && editorRect?.left) {
      const width = editorRect?.right-editorRect.left;
      setMaxWidth(4*width/5);
    }
  })
  useEffect(() => {
    console.log(maxHeight);
    console.log(maxWidth);
  },[maxHeight,maxWidth])
  return (
    <div className="h-lvh w-lvw flex flex-col overflow-x-hidden">
      <div className="bg-[#292E3E] w-lvw h-12 justify-center items-center z-10">
        <div className="flex flex-row h-full space-x-10 items-center">
          <div className="flex flex-row h-full items-center gap-2">
              <a href="http://localhost:5173/"><img src={logo} className="h-6 pl-4"></img></a>
              <h1 className="text-white font-medium font-serif tracking-widest align-middle">Content</h1>
          </div>
        </div>
      </div>
      <div className="bg-green-600 flex-grow w-lvw h-[calc(100vh-48px)] flex overflow-hidden">
        <div className="h-full w-56 bg-pink-600">
        </div>
        <div id="editorArea" className="flex-grow flex">
          <CodeEditor/>
          <div className="w-2/5 flex flex-grow flex-col">
            <Webview/>
            <Terminal/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
