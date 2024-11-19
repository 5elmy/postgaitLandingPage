import Image from 'next/image'
import React from 'react'
import dashboard from "../images/manage/object (1).svg"
import shop from "../images/manage/Group.svg" 
import {motion} from "framer-motion"
export default function ManageShipmentsLandingPage() {
  return (
    <>
    <section className='p-8 md:p-0 overflow-hidden'>
        <motion.h2
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: -100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 , delay:0.5, ease: "easeOut" }}
        className='text-[#4D1A2D] font-[Cairo] text-[32px] font-bold text-center'>An integrated control panel to manage your shipments easily and quickly
        </motion.h2>
        <motion.p
         whileInView={{ opacity: 1, translateY: 0 }}
         initial={{ opacity: 0, translateY: -150 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1.5 , delay:0.7, ease: "easeOut" }} 
        className='font-[Cairo] text-[#666666] text-center text-[17px] '>
        <span className='text-[#FC746C]'>MENA&rsquo;s #1</span>With the #1 shipping gateway in the MENA region, you have full control over your shipments through a simple and <br/>
         effective web interface. The control panel enables you to manage orders, track shipments, analyze performance, and make <br/>
          returns in cooperation with multiple shipping companies, to facilitate your shipping experience from start to finish.
        </motion.p>
      

      {/* Base */}
    <div className='flex justify-center items-center my-5'>

<motion.a
   whileInView={{ opacity: 1, translateY: 0 , rotate:0 }}
   initial={{ opacity: 0, translateY: -150  , rotate:45}}
   viewport={{ once: true, amount: 0.5 }}
   transition={{ duration: 1.5 , delay:0.7, ease: "easeOut" }}
  className="group relative rounded-md inline-block text-sm font-medium text-white focus:outline-none focus:ring"
  href="#"
>
  <span className="absolute rounded-md inset-0 border border-[#FC746C] group-active:border-[#FC746C]"></span>
  <span
    className="block border rounded-md border-[#FC746C] bg-[#FC746C] px-12 py-3 transition-transform active:border-[#FC746C] active:bg-[#FC746C] group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Start For Free
  </span>
</motion.a>

    </div>

    <motion.p 
       whileInView={{ opacity: 1}}
       initial={{ opacity: 0}}
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 1.5 , delay:0.7, ease: "easeOut" }} 
    
    className='text-[#263238] text-center font-[Cairo] text-[16px]'>
    Your store&rsquo;s homepage provides an overview of your business performance. It displays detailed statistics on the number of customers, completed shipments, and the most<br/>
     popular cities, helping you effectively track orders and make informed decisions. You can easily monitor growth and improvements with interactive graphical indicators,<br/> making store management smoother and more accurate.

    </motion.p>
    <motion.div 
     whileInView={{ opacity: 1 , translateX:0 }}
     initial={{ opacity: 0 , translateX:100 }}
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 1.5 , ease: "easeOut" }} 
    
    className='md:flex relative  justify-center items-center my-10 md:my-8 w-[330px] md:w-full '>
        <p className='transform absolute top-5 -left-12 md:left-[220px] -rotate-45  bg-[#FC746C] rounded-md h-[35px] w-[180px]  md:w-[180px] text-center flex justify-center items-center gap-2 text-white'>  Dashboard</p>

    <Image src={dashboard} alt='dashboard'/>

    </motion.div>
    <motion.div 
         whileInView={{ opacity: 1 , translateX:0 }}
         initial={{ opacity: 0 , translateX:-100 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1.5 , ease: "easeOut" }} 
    className='md:flex relative justify-center items-center my-10 md:my-8 w-[330px] md:w-full '>
        <p className='transform absolute top-5 -right-10 md:right-[220px] rotate-45  bg-[#FC746C] rounded-md h-[35px] w-[180px]  md:w-[180px] text-center flex justify-center items-center gap-2 text-white'>  Shop</p>

    <Image src={shop} alt='Shop'/>

    </motion.div>


  



    </section>
    <div className=' md:flex justify-around items-center bg-[#FC746C] my-5 pb-8'>
    <div className=' py-8'>
        <motion.h2 
         whileInView={{ opacity: 1, translateY: 0 }}
         initial={{ opacity: 0, translateY: -100 }}
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 1.5 , delay:0.7, ease: "easeOut" }}
        className='font-[Poppins] text-[40px] text-center text-white font-bold'>“Explore endless possibilities – sign up today!”</motion.h2>
        <motion.p 
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -150 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 , delay:0.7, ease: "easeOut" }}
        className='font-[Poppins] my-3 text-[16px] text-center font-semibold text-white '>Sign up now to access advanced features, manage your shipments easily, and track your store&rsquo;s performance <br/> through a comprehensive dashboard!
        </motion.p>
    </div>
        <div className='flex justify-center items-center md:block'>
            <motion.button 
             whileInView={{ opacity: 1, translateY: 0 , rotate:0 }}
             initial={{ opacity: 0, translateY: -150  , rotate:45}}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 1.5 , delay:0.7, ease: "easeOut" }}
            className='bg-white px-6 text-[#FC746C] font-semibold font-[Poppins] text-[18px] rounded-md h-[44px]'>Start For Free</motion.button>
        </div>
    </div>
    
    </>
  )
}
