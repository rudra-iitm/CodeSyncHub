// import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/code-editor-favicon-color.png"
import img1 from "../assets/code-editor-favicon-white.png"
import {  TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
}
   from "./ui/text-reveal-card";

const Login:React.FC = () => {
    const navigate=useNavigate();
    const signinOnclickHandler = () => {
        // console.log("bcdd");
        navigate('/register');
        // Add your logic here
      };
    return (
    <div className="flex flex-col justify-between bg-[#0E0E10] h-lvh w-lvw p-0 m-0">
        <div className="bg-[#292E3E] z-10 w-lvw flex flex-row items-center justify-between" style={{height:'8%'}}>
            <div className="flex flex-row h-full space-x-10 items-center">
                <div className="flex flex-row h-full items-center gap-2">
                    <a href="http://localhost:5173/"><img src={logo} className="h-6 pl-2"></img></a>
                    <h1 className="text-white font-medium font-serif tracking-widest align-middle">codeSync</h1>
                </div>
            </div>
            <div className="mr-8">
                <img src={img1} className="h-8 pl-2"></img>
            </div>
        </div>
        <div className="flex flex-row w-lvw justify-around items-center z-10" style={{height:'92%'}}>
            <div className="flex flex-col items-center justify-center bg-[#0E0E10] rounded-2xl h-4/6 w-2/5 m-12">
                <TextRevealCard 
                text="You know the Code"
                revealText="I provide the Compiler ">
                <TextRevealCardTitle>
                Make something great.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                Build, test, and deploy directly from the browser,Collaborate in real-time with Multiplayer
                </TextRevealCardDescription>
                </TextRevealCard>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#1d1c20] h-4/5 rounded-2xl w-2/5 space-y-4">
                <h1 className="text-white text-xl">Login to Codesync account</h1>
                <input  className="flex enabled:hover:border-teal-400 disabled:opacity-75 px-8 py-2 rounded-md bg-[#292E3E]"
                placeholder="Email" type="email"/>
                <input  className="flex enabled:hover:border-teal-400 disabled:opacity-75 px-8 py-2 rounded-md bg-[#292E3E] placeholder:text-gray-400"
                placeholder="Password" type="password"/>
                <button className="flex border-white bg-blue-500 pl-9 pr-9 py-2  rounded-xl items-center"><h1 className="text-white">Log In</h1></button>
                <div className="h-0.5 bg-[#292E3E] w-2/6"></div>
                <div className="flex flex-row items-center space-x-2"><button><h6 className="text-blue-500 text-sm">Forgot password?</h6></button></div>
                <div className="h-0.5 bg-[#292E3E] w-2/6"></div>
                <div className="flex flex-row items-center space-x-2"><h6 className="text-gray-400">Don't have an account?</h6><button onClick={signinOnclickHandler}><h6 className="text-blue-500 text-sm">Sign Up</h6></button></div>
                <span className="w-60 space-x-1 selection align-middle pr-1">
                    <span className="text-gray-400 text-xs text-center">
                        By continuing, you agree to Replit's
                    </span>
                       <a href=""><span className="text-gray-500 font-bold text-xs text-center cursor-pointer">Terms </span> <span  className="text-gray-500 font-bold text-xs text-center pl-7 cursor-pointer"> of Service</span></a> 
                       <span className="text-gray-400 text-xs text-center">and </span>
                       <a href=""><span className="text-gray-500 font-bold text-xs cursor-pointer">Privacy Policy</span></a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Login
