
"use client"
import React from 'react'
import {motion} from "framer-motion"
export default function FirstSection() {
    const sentence = `We lead fleets using smarter technology to anything from anywhere in your city to local Sa-adiya provinces or to the international world`;

    // Framer Motion configuration for the letters
    const container = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05, // Stagger between each letter
        },
      },
    };
  
    const child = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  return (
    <section className='about  text-[#4D1A2D]  bg-cover bg-center bg-no-repeat min-h-[100vh] '>

     

<div style={{ fontSize: "24px", fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
      <motion.h2
        variants={container}
        initial="hidden"
        animate="visible"
        
        style={{ display: "flex", flexWrap: "wrap" }}
        className='text-center text-[23px] md:text-[37px] font-semibold font-[Inter] pt-32 w-[85%] mx-auto'
      >
        {sentence.split("").map((char, index) => (
          <motion.span key={index} variants={child} style={{ marginRight: char === " " ? "10px" : "" }}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>


      
    </section>
  )
}
