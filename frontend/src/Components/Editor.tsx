// import React from 'react'
import logo from "../assets/code-editor-favicon-white.png"

const Editor = () => {
  return (
    <>
    <div className="bg-[#292E3E] w-lvw h-12 justify-center items-center fixed z-10">
        {/* <h1 className="text-white">abcd</h1> */}
      <div className="flex flex-row h-full space-x-10 items-center">
        <div className="flex flex-row h-full items-center gap-2">
            <a href="http://localhost:5173/"><img src={logo} className="h-6 pl-4"></img></a>
            <h1 className="text-white font-medium font-serif tracking-widest align-middle">Content</h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default Editor
