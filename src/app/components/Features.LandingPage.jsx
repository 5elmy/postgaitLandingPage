 "use client"
import React, { useEffect, useRef, useState } from 'react'
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
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const isSmallScreen = window.innerWidth < 768;
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible(entry.isIntersecting),
          { threshold: isSmallScreen ? 0.2 : 0.5,
            rootMargin: isSmallScreen ? "0px 0px -20% 0px" : "0px", } // Trigger when 50% of the section is visible
        );
    
        // if (sectionRef.current) {
        //   observer.observe(sectionRef.current);
        // }
    
     
        // Example breakpoint
        // const observer = new IntersectionObserver(
        //   ([entry]) => setIsVisible(entry.isIntersecting),
        //   {
        //     threshold: isSmallScreen ? 0.2 : 0.5,
        //     rootMargin: isSmallScreen ? "0px 0px -20% 0px" : "0px",
        //   }
        // );
      
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
      
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }

        };
      }, []);
    
  return (
    <section  ref={sectionRef}  className=" text-white relative ">
  <div  className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
    <div className="mx-auto z-10 text-center">
      <motion.h2  initial={{opacity:0 , translateY:-100}} animate={isVisible ?{opacity:1 , translateY:0}:{opacity:0 , translateY:-100}} transition={{duration:1 ,  ease: "easeOut"  }} className="text-3xl font-bold text-[#4D1A2D] text-center sm:text-[32px]">The features of Postgait are many waiting for you!</motion.h2>

      <motion.p  initial={{opacity:0 , translateY:-150}} animate={isVisible ?{opacity:1 , translateY:0}:{opacity:0 , translateY:-150}} transition={{duration:1 ,  ease: "easeOut"  }} className="mt-4 z-10 text-gray-300 font-[Cairo] text-[16px]  text-center">
      We offer a lot of advantages for electronic stores to ship their products to their customers in all cities and governorates of the Kingdom of Saudi Arabia and international shipping
      </motion.p>
    </div>
    {/* <div className=' w-[800px] h-[80px] hidden md:block bg-[#4D1A2D] relative !z-0 md:-translate-x-[550px] -rotate-45 scale-10 text-white text-center text-[75px] ' >POSTGAIT</div> */}
    <div className=' absolute hidden md:block top-[200px] md:top-20 right-0   '>

    <Image src={Plan} alt='plan' width={60} />
    </div>
    <div className=' absolute hidden md:block bottom-[200px] md:bottom-[200px] left-0   '>

    <Image src={box} alt='plan' width={60} />
    </div>

    <div className="mt-8  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div 
      initial={{opacity:0 ,  translateY:-100}} animate={isVisible ?{opacity:1 , translateY:0}:{opacity:0 ,  translateY:-100}} transition={{duration:1 , delay:0.5 ,  ease: "easeOut"  }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div  className='flex justify-center items-center '>
       <Image src={airplane} alt='airplane' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">High Efficiency</h2>

      </motion.div>
      <motion.div
      initial={{opacity:0 ,  translateY:-100}} animate={isVisible ?{opacity:1  , translateY:0}:{opacity:0 ,  translateY:-100}} transition={{duration:1 , delay:0.5 ,  ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={premiumQuality} alt='Premium Quality' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">Premium Quality</h2>

      </motion.div>
      <motion.div
      initial={{opacity:0 ,  translateY:-100}} animate={isVisible ?{opacity:1  , translateY:0}:{opacity:0 ,  translateY:-100}} transition={{duration:1 , delay:0.5 ,  ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={ContinuousImprovement} alt='Continuous Improvement' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins] font-bold text-[#4D1A2D] text-center">Continuous Improvement</h2>

      </motion.div>

      <motion.div
      initial={{opacity:0 , translateY:-200}} animate={isVisible ?{opacity:1 ,  translateY:0}:{opacity:0 , translateY:-200}} transition={{duration:2 , delay:1 ,  ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={QuickConversion} alt='Quick Conversion' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">Quick Conversion</h2>

      </motion.div>
      <motion.div
      initial={{opacity:0  , translateY:-200}} animate={isVisible ?{opacity:1 , translateY:0}:{opacity:0 , translateY:-200}} transition={{duration:2 , delay:1 ,  ease: "easeOut" }}
        className="block bg-[#FFDDDD]  rounded-xl  p-8 shadow-lg transition  hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
       <div className='flex justify-center items-center '>
       <Image src={Directcoordination} alt='Direct coordination' />

       </div>

        <h2 className="mt-4 text-[24px] font-[Poppins]  font-bold text-[#4D1A2D] text-center">Direct Coordination </h2>

      </motion.div>
      <motion.div
      initial={{opacity:0 , translateY:-200}} animate={isVisible ?{opacity:1  , translateY:0}:{opacity:0 , translateY:-200}} transition={{duration:2 , delay:1 ,  ease: "easeOut" }}
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




// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const SectionAnimation = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <motion.div
//         ref={sectionRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//         className="h-screen flex items-center justify-center bg-gray-200"
//       >
//         <h1>Section with Animation</h1>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionAnimation;
