"use client"
import Image from 'next/image'
import React from 'react'
import underline from "../../images/About/underline.svg"
import ear from "../../images/About/catear.svg"
import {motion} from "framer-motion"
export default function Ideal({mainName , mainText , mainImage , dir , number}) {
  return (
    <section className='grid grid-cols-12 gap-5 text-[#4D1A2D] overflow-hidden'>
        {dir =="rtl" ? <>
        
            <motion.div 
                    whileInView={{ opacity: 1, translateX: 0  }}
                    initial={{ opacity: 0, translateX: -150  }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 , ease: "easeOut" }}
                className='col-span-12 flex justify-center items-center md:col-span-6 '>
            <Image src={mainImage } alt={mainName}/>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, translateX: 0  }}
          initial={{ opacity: 0, translateX: 150  }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 , ease: "easeOut" }}
        className='col-span-12 flex justify-center items-center md:col-span-6'>
            <div 
            
            className='w-[90%]'>

            <div className='relative flex flex-col justify-center items-center my-3'>
            <Image src={ear} alt='ear' className={`absolute hidden md:block -top-2 left-[${number}%] md:left-[32%]`}/>
            <h2 className='font-semibold text-[50px]'>{mainName}</h2>
            <Image src={underline} alt='underline'/>
            </div>
            <p className='text-center  text-[21px] font-[cairo]'>
                {mainText}
            </p>

            </div>

        </motion.div>
        </>    : <>

        <motion.div 
                    whileInView={{ opacity: 1, translateX: 0  }}
                    initial={{ opacity: 0, translateX: -150  }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 , ease: "easeOut" }} className='col-span-12 flex justify-center items-center md:col-span-6'>
            <div className='w-[90%]'>

            <div className='relative flex flex-col justify-center items-center my-3'>
            <Image src={ear} alt='ear' className={`absolute hidden md:block  -top-2 left-[${number}%] md:left-[32%]`}/>
            <h2 className='font-semibold text-[50px]'>{mainName}</h2>
            <Image src={underline} alt='underline'/>
            </div>
            <p className='text-center  text-[21px] font-[cairo]'>
                    {mainText}
            </p>

            </div>

        </motion.div>
        
        <motion.div 
                    whileInView={{ opacity: 1, translateX: 0  }}
                    initial={{ opacity: 0, translateX: 150  }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 , ease: "easeOut" }} className='col-span-12 flex justify-center items-center md:col-span-6 '>
            <Image src={mainImage} alt={mainName}/>
        </motion.div>
      
        
        </> }
       
      
    </section>
  )
}
