import Image from 'next/image'
import React from 'react'
import map1 from "../images/partners/map1.svg"
import map2 from "../images/partners/Frame.svg"
import smsa from "../images/partners/smsa.png.svg"
import dhl from "../images/partners/DHL.svg"
import aramex from "../images/partners/aramex.svg"
import container2 from "../images/partners/illustration.jpg"
import men from "../images/partners/mens.jpg"
import circle from "../images/partners/circle.jpg"
import star from "../images/partners/star.jpg"
import {motion} from "framer-motion"
export default function PartnersLandingPages() {
  return (
   <section
 
   className='overflow-hidden'
   >
  <motion.div 
 whileInView={{ opacity: 1, translateY: 0  }}
 initial={{ opacity: 0, translateY: -150 }}
 viewport={{ once: true, amount: 0.5 }}
 transition={{ duration: 1.5, ease: "easeOut" }}
  className='grid grid-cols-12 gap-2'>
    <div className='col-span-12 md:col-span-3 '>
        <Image src={map1} alt='map 1'/>
    </div>
    <div className='col-span-12 md:col-span-6 md:pt-16'>
        <h2 className='font-[Cairo] font-bold text-[35px] text-center text-[#4D1A2D] my-3'>Our Shipping & Distribution Partners</h2>
        <p className='text-center font-[Cairo] text-[#6C757D] text-[16px]'>A wide range of the best local and international companies</p>
        <div className='md:flex    md:justify-between items-center gap-8 my-5'>
            <Image className='mx-[80px] my-8 md:m-0' src={smsa} alt='smsa'/>
            <Image className='my-8 mx-[80px] md:m-0' src={dhl} alt='DHL'/>
            <Image className='my-8 mx-[80px] md:m-0' src={aramex} alt='aramex'/>
        </div>
        <p className='text-center font-[Cairo] text-[#6C757D] text-[16px] py-5'>We are proud that we create a profitable business for our clients, and strive to always provide the best.</p>
    </div>
    <div className='col-span-12 md:col-span-3  flex justify-end items-center'>
    <Image src={map2} alt='map 2'/>
    </div>
  </motion.div>
  <motion.div 
   whileInView={{ opacity: 1  }}
   initial={{ opacity: 0}}
   viewport={{ once: true, amount: 0.5 }}
   transition={{ duration: 1.5, ease: "easeOut" }}
  
  className='grid grid-cols-12 gap-2 mt-10'>
    <div className='col-span-12 md:col-span-3 '>
        <Image src={container2} alt='container 1'/>
    </div>
    <div className='col-span-12 md:col-span-6 md:pt-4 p-4 md:p-0'>
        <h2 className='font-[Cairo] font-bold text-[35px] text-center text-[#4D1A2D] my-3'>Safe and reliable shipping services</h2>
        <p className='text-center font-[Cairo] text-[#6C757D] text-[16px]'>Get all your logistics needs in one place. In addition to being the preferred choice for Saudi companies, Postgait aims to provide an exceptional experience for individual customers.
        </p>
        <div className='flex justify-between items-center gap-8 my-5'>
            <div className='flex flex-col justify-center items-center'>
            <Image src={men} alt='men'/>
                <p className='text-center my-2 font-[Poppins] text-[22px] md:text-[32px]  font-extrabold text-[#4D1A2D]'>10000+</p>
                <p className='text-center my-2 font-[Poppins] text-[16px] md:text-[20px] font-medium text-[#949494]'>Happy Customers</p>
                
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={circle} alt='circle'/>
                <p className='text-center my-2 font-[Poppins] text-[22px] md:text-[32px] font-extrabold text-[#4D1A2D]'>20000+</p>
                <p className='text-center my-2 font-[Poppins] text-[16px] md:text-[20px] font-medium text-[#949494]'>Success Processes</p>
                
            </div>
            <div className='flex flex-col justify-center items-center'>
            <Image src={star} alt='star'/>
                <p className='text-center my-2 font-[Poppins] text-[22px] md:text-[32px] font-extrabold text-[#4D1A2D]'>10+Years</p>
                <p className='text-center my-2 font-[Poppins] text-[18px] md:text-[20px] font-medium text-[#949494]'>of  Experience</p>
                
            </div>
           
           
        </div>
        <p className='text-center font-[Cairo] text-[#6C757D] text-[16px] py-5'>We are proud that we create a profitable business for our clients, and strive to always provide the best.</p>
    </div>
    <div className='col-span-12 md:col-span-3  flex justify-end items-center'>
    <Image src={container2} alt='container 2'/>
    </div>
  </motion.div>
   </section>
  )
}
