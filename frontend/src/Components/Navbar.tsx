// import React from 'react'
import logo from "../assets/code-editor-favicon-color.png"
const Navbar = () => {
  return (
    <div className="bg-[#292E3E] w-lvw h-16 justify-center items-center fixed">
        {/* <h1 className="text-white">abcd</h1> */}
      <div className="flex flex-row h-full space-x-10 items-center">
        <div className="flex flex-row h-full items-center gap-2">
            <a href="http://localhost:5173/"><img src={logo} className="h-6 pl-2"></img></a>
            <h1 className="text-white font-medium font-serif tracking-widest align-middle">codeSync</h1>
        </div>
        <a href="http://localhost:5173/"><h1 className="text-white font-thin font-mono">Home</h1></a>
        <a href="http://localhost:5173/"><h1 className="text-white font-thin font-mono">Features</h1></a>
        <a href="http://localhost:5173/"><h1 className="text-white font-thin font-mono">Blogs</h1></a>
        <a href="http://localhost:5173/"><h1 className="text-white font-thin font-mono">Careers</h1></a>
        <a href="http://localhost:5173/"><h1 className="text-white font-thin font-mono">About Us</h1></a>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar
