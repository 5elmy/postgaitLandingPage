// "use client"
// import React, { useRef, useState } from 'react'
// import {motion , AnimatePresence} from "framer-motion"
// export default function About() {
//     const textAreaRef= useRef(null)
//     let [textvalue, setTextvalue] = useState("")
//   return (
//     <div className='p-5 flex flex-col'>
//         <textarea
//         onChange={e=>setTextvalue(e.target.value)}
//         ref={textAreaRef} 
//         className='opacity-0 w-0 h-0'/>

//         <div onClick={()=> textAreaRef.current.focus()} className='min-h-60 bg-blue-950 text-white font-semibold text-xl min-w-full p-5 overflow-x-hidden'>
//             <AnimatePresence>


//             {textvalue.split("").map((ele, index)=>(
//               <motion.span 
//               initial={{opacity:0 ,y:100 , rotate:50}} 
//               animate={{opacity:1 , y:0 , rotate:0}} 
//               exit={{opacity:0 , y:100 , rotate:-50,transition:{duration:0.15,}}} 
//               key={index}
//               transition={{duration:0.5 , ease:"easeIn"}}
//               className={ele !="\n"? "inline-block mr-0.5":"inline"}
//               >{ele}</motion.span>
//             ))}
//             </AnimatePresence>
//         </div>
      
//     </div>
//   )
// }




import FirstSection from '../components/AboutLandingPage/firstSection';
import Ideal from '../components/AboutLandingPage/Ideal.about';
import ideal from "../images/About/ideal.svg"
import message from "../images/About/message.svg"
import last from "../images/About/Clip path group.svg"
import Lastsection from '../components/AboutLandingPage/Lastsection.about';
import SignUpBanner from '../components/signupBanner';
export default function About() {


  return (
    <section  className='bg-white'>
<SignUpBanner/>
<FirstSection/>
<Ideal number={15} dir={"rtl"} mainImage={ideal} 
mainText={"We were founded, stepping miles towards innovation and leadership in the field of transport and logistics, as Postgait provides reliable and logistical solutions that fulfill the aspirations of every merchant by providing all the services he needs when shipping and transporting goods from one place to another."}
mainName={"Our idea"}
/>
<Ideal number={0} dir={"ltr"} mainImage={message} 
mainText={"Providing unique services with high quality and competitive prices that make you comfortable in managing your shipments and focusing on developing your products and marketing your brand."}
mainName={"Our message"}
/>
<Ideal number={0} dir={"rtl"} mainImage={last} 
mainText={"To be the best choice for traders and investors, and to do our utmost to provide innovative logistical and executive services and solutions."}
mainName={"Our vision"}
/>

<Lastsection/>

      
    </section>
  )
}
