"use client"
import React, { useRef, useState } from 'react'
import {motion , AnimatePresence} from "framer-motion"
export default function About() {
    const textAreaRef= useRef(null)
    let [textvalue, setTextvalue] = useState("")
  return (
    <div className='p-5 flex flex-col'>
        <textarea
        onChange={e=>setTextvalue(e.target.value)}
        ref={textAreaRef} 
        className='opacity-0 w-0 h-0'/>

        <div onClick={()=> textAreaRef.current.focus()} className='min-h-60 bg-blue-950 text-white font-semibold text-xl min-w-full p-5 overflow-x-hidden'>
            <AnimatePresence>


            {textvalue.split("").map((ele, index)=>(
              <motion.span 
              initial={{opacity:0 ,y:100 , rotate:50}} 
              animate={{opacity:1 , y:0 , rotate:0}} 
              exit={{opacity:0 , y:100 , rotate:-50,transition:{duration:0.15,}}} 
              key={index}
              transition={{duration:0.5 , ease:"easeIn"}}
              className={ele !="\n"? "inline-block mr-0.5":"inline"}
              >{ele}</motion.span>
            ))}
            </AnimatePresence>
        </div>
      
    </div>
  )
}
