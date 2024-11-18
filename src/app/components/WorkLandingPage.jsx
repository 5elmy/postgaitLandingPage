import React from 'react'
import one from "../images/works/feature-ils-1.svg.svg"
import two from "../images/works/feature-ils-2.svg.svg"
import three from "../images/works/feature-ils-3.svg.svg"
import Image from 'next/image'
export default function WorkLandingPage() {
  return (
    <section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-2xl font-bold tracking-tight text-[#4D1A2D] font-[Cairo]  sm:text-[32px]">
    How We Work for You: A Step-by-Step Guide
    </h2>
    <p className='font-[Cairo] text-[16px] text-center text-[#6c757D] my-3'>
    
Postgait is the quickest and simplest way to ship products to customers. We offer an exceptional<br/> shipping experience that meets the needs of e-commerce customers at every step.

    </p>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote className="rounded-lg  p-6 shadow-sm sm:p-8">
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
      </blockquote>

      <blockquote className="rounded-lg  p-6 shadow-sm sm:p-8">
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
      </blockquote>
      <blockquote className="rounded-lg  p-6 shadow-sm sm:p-8">
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
      </blockquote>

     
    </div>
  </div>
</section>
  )
}

