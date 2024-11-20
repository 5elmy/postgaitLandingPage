"use client"
import React from 'react'
import {motion} from "framer-motion"
export default function Lastsection() {
  return (
    <section className='bg-[#F5F5F5] p-8 overflow-hidden'>

        <motion.h2 
           whileInView={{opacity:1 , translateX:0 }}
           initial={{opacity:0 , translateX:150 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 1 , ease: "easeOut" }}
        className='text-[#FC746C] font-[Cairo] text-[40px] font-bold text-center'>
        Lowest prices no matter how much you charge
        </motion.h2>
        <motion.p 
                   whileInView={{opacity:1 , translateX:0 }}
                   initial={{opacity:0 , translateX:150 }}
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 1.5 , ease: "easeOut" }}
        className='w-[90%] md:w-[50%] mx-auto'>
        Compare real-time rates and delivery times for all carriers and automatically select the best carrier for each shipment based on cost and delivery time. Thanks to our great membership, we have negotiated reserved rates for many companies, for your convenience.
        </motion.p>

        {/* Base */}
<div className='flex justify-center items-center py-8'>

<motion.button
           whileInView={{opacity:1 , translateX:0 }}
           initial={{opacity:0 , translateX:150 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 2 , ease: "easeOut" }}

  className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
 
>
  <span className="absolute inset-0 border border-red-600 rounded-md group-active:border-red-500"></span>
  <span
    className="block border border-red-600 bg-red-600 rounded-md px-16 md:px-32 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Start charging now 
  </span>
</motion.button>


</div>


      
    </section>
  )
}
