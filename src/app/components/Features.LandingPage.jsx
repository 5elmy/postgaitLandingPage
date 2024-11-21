 "use client"
import React from 'react'
import airplane from "../images/Features/Airplane.svg"
import premiumQuality from "../images/Features/PremiumQuality.svg"
import ContinuousImprovement from "../images/Features/ContinuousImprovement.svg"
import QuickConversion  from "../images/Features/Price.svg"
import Cashondelivery from "../images/Features/Cash.svg"
import Directcoordination from "../images/Features/Directcoordination.svg"
import Plan from "../images/Features/plane.svg.png"
import box from "../images/Features/services-shape-package.svg.png"
import Image from 'next/image'
import {motion} from "framer-motion"

export default function FeaturesLandingPage() {
  
    
  return (
    <section    className="  relative ">
       <motion.h2 className='bg-[#4D1A2D] text-center text-white'
  whileInView={{ opacity: 1, translateY: 0 }}
  initial={{ opacity: 0, translateY: -100 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
<marquee  width="100%" direction="right"  height="20px">
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
<span className='px-3'></span>
The features of Postgait are many waiting for you!
</marquee>
</motion.h2>





  <div  className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
    <div className="mx-auto z-10 text-center">
      <motion.h2  
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
      </motion.p>
    </div>
    <div className=' absolute hidden md:block top-[200px] md:top-20 right-0   '>

    <Image src={Plan} alt='plan' width={60} />
    </div>
    <div className=' absolute hidden md:block bottom-[200px] md:bottom-[200px] left-0   '>

    <Image src={box} alt='plan' width={60} />
    </div>

    <div className="mt-8  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div 
        whileInView={{ opacity: 1, translateX: 0 }}
        initial={{ opacity: 0, translateX: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      
    //    transition={{duration:1 , delay:0.5 ,  ease: "easeOut"  }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div  className='flex justify-center items-center '>
       <Image src={airplane} alt='airplane' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">High Efficiency</h2>

      </motion.div>
      <motion.div
       whileInView={{ opacity: 1, translateX: 0 }}
       initial={{ opacity: 0, translateX: 100 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1, delay:0.4, ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={premiumQuality} alt='Premium Quality' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">Premium Quality</h2>

      </motion.div>
      <motion.div
       
       whileInView={{ opacity: 1, translateX: 0 }}
       initial={{ opacity: 0, translateX: 100 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1, delay:0.8, ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={ContinuousImprovement} alt='Continuous Improvement' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins] font-bold text-[#4D1A2D] text-center">Continuous Improvement</h2>

      </motion.div>

      <motion.div
       whileInView={{ opacity: 1, translateX: 0 }}
       initial={{ opacity: 0, translateX: 120 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1.5 ,delay:0.2 ,ease: "easeOut" }}

        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={QuickConversion} alt='Quick Conversion' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">Quick Conversion</h2>

      </motion.div>
      <motion.div
       whileInView={{ opacity: 1, translateX: 0 }}
       initial={{ opacity: 0, translateX: 130 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1.5 , delay:0.6 , ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={Directcoordination} alt='Direct coordination' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">Direct Coordination </h2>

      </motion.div>
      <motion.div
       whileInView={{ opacity: 1, translateX: 0 }}
       initial={{ opacity: 0, translateX: 130 }}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1.5 ,delay:1 ,ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={Cashondelivery} alt='Cash on delivery' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins] font-bold text-[#4D1A2D] text-center">Cash on delivery</h2>

      </motion.div>


    </div>


  </div>
</section>
  )
}


