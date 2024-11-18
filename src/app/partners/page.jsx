import Image from 'next/image'
import React from 'react'
import map1 from "../images/partners/map1.svg"
import map2 from "../images/partners/Frame.svg"
import smsa from "../images/partners/smsa.png.svg"
import dhl from "../images/partners/DHL.svg"
import aramex from "../images/partners/aramex.svg"
export default function partners() {
  return (
   <section>
  <div className='grid grid-cols-12 gap-2'>
    <div className='col-span-12 md:col-span-3 '>
        <Image src={map1} alt='map 1'/>
    </div>
    <div className='col-span-12 md:col-span-6 md:pt-16'>
        <h2 className='font-[Cairo] font-bold text-[35px] text-center text-[#4D1A2D] my-3'>Our Shipping & Distribution Partners</h2>
        <p className='text-center font-[Cairo] text-[#6C757D] text-[16px]'>A wide range of the best local and international companies</p>
        <div className='flex justify-between items-center gap-8 my-5'>
            <Image src={smsa} alt='smsa'/>
            <Image src={dhl} alt='DHL'/>
            <Image src={aramex} alt='aramex'/>
        </div>
        <p className='text-center font-[Cairo] text-[#6C757D] text-[16px] py-5'>We are proud that we create a profitable business for our clients, and strive to always provide the best.</p>
    </div>
    <div className='col-span-12 md:col-span-3  flex justify-end items-center'>
    <Image src={map2} alt='map 2'/>
    </div>
  </div>
   </section>
  )
}
