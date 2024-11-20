"use client"
import Image from 'next/image'
import React from 'react'
import curve from "../images/Home/Vector 32.svg" 
// import { FaShippingFast } from "react-icons/fa";
import {motion} from "framer-motion"
import AboutLandingPage from '../components/about.landingPage';
import CustomerReviewsLandingPage from '../components/Customerreviews.LandingPage';
import FeaturesLandingPage from '../components/Features.LandingPage';
import ManageShipmentsLandingPage from '../components/manageShipments.landingpage';
import PartnersLandingPages from '../components/partners.landingPage';
import WorkLandingPage from '../components/WorkLandingPage';
import SignUpBanner from '../components/signupBanner'




export default function Home() {
    
  return (
    <div className='bg-white'>

    {/* home 1 */}
<section
  className="custom min-h-screen bg-cover bg-center relative  bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative px-4 md:px-8 py-16   "
  >
    <div className="  ltr:sm:text-left rtl:sm:text-right ">
      <motion.h1  initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:2}} className="text-4xl text-center md:text-start md:text-8xl  md:w-[70%] font-[inter] font-extrabold text-white ">
        Make Your Online

        <motion.strong initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{ duration:3}} className="block font-extrabold my-2"> Store Shipping </motion.strong>
       <motion.span initial={{opacity:0 , y:500}} animate={{opacity:1 , y:0 }} transition={{delay:0.5, duration:4}}>
       Faster than Ever
        </motion.span> 
      </motion.h1>
      <motion.div initial={{opacity:0 , y:500 , x:-1024}} animate={{opacity:1 , y:0 ,x:0}} transition={{ delay:1, duration:3}} className='md:w-[50%] mx-4  my-5 flex justify-center items-center'>

      <Image className='' src={curve}  alt="curve"/>
      </motion.div>

      <motion.p initial={{opacity:0 , x:500}} animate={{opacity:1 , x:0 }} transition={{delay:1, duration:3}} className="mt-4   ms-12 max-w-2xl text-white sm:text-xl/relaxed">
      Troxo is the most secure choice for premium shipping. It offers reliable and fast services that meet the needs of online stores and ensure products reach customers safely and quickly.

      </motion.p>

      <div className="mt-8 ms-12 flex flex-wrap gap-4 text-center">
      



<motion.button

initial={{opacity:0 , y:-300 , rotate:50}} animate={{opacity:1 , y:0 , rotate:0 }}   transition={{ delay:0.5, duration:3.5 ,ease:"easeOut"}}
className=" flex items-center font-[sarabun] rounded border-none bg-[#FC746C]  px-16 py-3 text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#FC746d]"

>
{/* <FaShippingFast className='' /> */}
<span className='ps-2 pr-3'> Start Now</span>
</motion.button>



      
      </div>
    </div>
  </div>
</section>
<SignUpBanner/>
<AboutLandingPage/>

<FeaturesLandingPage/>
<WorkLandingPage/>
<ManageShipmentsLandingPage/>
<PartnersLandingPages/>
<CustomerReviewsLandingPage/>
    </div>
  )
}
