// import React from 'react'
import {  TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
}
   from "./ui/text-reveal-card";

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-lvh  w-full">
        <div className="flex items-center justify-center bg-[#0E0E10] rounded-2xl w-1/2 p-4">
            <TextRevealCard 
            text="You know the business"
            revealText="I know the chemistry ">
            <TextRevealCardTitle>
            Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
            </TextRevealCardDescription>
            </TextRevealCard>
        </div>
        <div className="flex items-center justify-center bg-[#1d1c20] h-3/5 rounded-2xl w-1/2 m-8">
            {/* <h1 className="text-white">abcd</h1> */}
            <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            </span>
            <input className="placeholder:text-grey-200 block bg-grey-800 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                placeholder="Email" 
                type="email"
                name="search"/>
            </label>

        </div>
    </div>
  )
}

export default Register
