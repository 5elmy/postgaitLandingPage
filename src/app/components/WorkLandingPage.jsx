import React from 'react'
import one from "../images/works/feature-ils-1.svg.svg"
import two from "../images/works/feature-ils-2.svg.svg"
import three from "../images/works/feature-ils-3.svg.svg"
import Image from 'next/image'
import {motion} from "framer-motion"
export default function WorkLandingPage() {
  return (
    <section className="">
           {/* <motion.h2  
       whileInView={{ opacity: 1, translateY: 0 }}
       initial={{ opacity: 0, translateY: -100 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1, ease: "easeOut" }}
     className="text-3xl font-bold text-[#4D1A2D] text-center sm:text-[32px]">The features of Postgait are many waiting for you!</motion.h2>

      <motion.p  
       whileInView={{ opacity: 1, translateY: 0 }}
       initial={{ opacity: 0, translateY: -100 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1,delay:0.5 , ease: "easeOut" }}
   className="mt-4 z-10 text-gray-300 font-[Cairo] text-[16px]  text-center">
      We offer a lot of advantages for electronic stores to ship their products to their customers in all cities and governorates of the Kingdom of Saudi Arabia and international shipping
      </motion.p> */}
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <motion.h2

whileInView={{ opacity: 1, translateY: 0 }}
initial={{ opacity: 0, translateY: -100 }}
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 1.5, ease: "easeOut" }}
     className="text-center text-2xl font-bold tracking-tight text-[#4D1A2D] font-[Cairo]  sm:text-[32px]">
    How We Work for You: A Step-by-Step Guide
    </motion.h2>
    <motion.p
    whileInView={{ opacity: 1, translateY: 0 }}
    initial={{ opacity: 0, translateY: -100 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1,delay:0.5 , ease: "easeOut" }}
    className='font-[Cairo] text-[16px] text-center text-[#6c757D] my-3'>
    
Postgait is the quickest and simplest way to ship products to customers. We offer an exceptional<br/> shipping experience that meets the needs of e-commerce customers at every step.

    </motion.p>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 overflow-hidden">
      <motion.blockquote
      whileInView={{ opacity: 1, translateX: 0 }}
      initial={{ opacity: 0, translateX: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 ,delay:0.5, ease: "easeOut" }}
      className="rounded-lg  p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-center gap-4">
          <Image
            alt="image 3"
            src={three}
            
          />

         
        </div>

        <p className='mt-4 text-[#4D1A2D] font-[Cairo] font-bold text-[21px] text-center'>
                    Print the bill of lading
                    </p>
        <p className="mt-2 font-[Cairo] text-[#373744]  text-[16px] text-center">
        Print the bill of lading and get ready to <br/> ship the order to your customer 
        </p>
      </motion.blockquote>

      <motion.blockquote 
      whileInView={{ opacity: 1, translateX: 0 }}
      initial={{ opacity: 0, translateX: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5,delay:0.5 , ease: "easeOut" }}
      className="rounded-lg  p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-center gap-4">
          <Image
            alt="image 2"
            src={two}
          />

        
         
        </div>
        <p className='mt-4 text-[#4D1A2D] font-[Cairo] font-bold text-[21px] text-center'>
        Choose the right carrier
                    </p>
        <p className="mt-2 font-[Cairo] text-[#373744]  text-[16px] text-center">
        Browse the many carriers and choose the <br/> right price for your shipment 
        </p>
      </motion.blockquote>
      <motion.blockquote 
      whileInView={{ opacity: 1, translateX: 0 }}
      initial={{ opacity: 0, translateX: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5,delay:0.7 , ease: "easeOut" }}
      className="rounded-lg  p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-center gap-4">
          <Image
            alt="image 1"
            src={one}
          />

        
         
        </div>
        <p className='mt-4 text-[#4D1A2D] font-[Cairo] font-bold text-[21px] text-center'>
        Enter shipment information
                    </p>
        <p className="mt-2 font-[Cairo] text-[#373744]  text-[16px] text-center">
        Enter the shipment information, its weight and the address of the customer to be shipped to 
        </p>
      </motion.blockquote>

     
    </div>
  </div>
</section>
  )
}

