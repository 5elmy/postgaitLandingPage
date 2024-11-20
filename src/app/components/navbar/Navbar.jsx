// "use client"
// import React, { useState } from 'react'
// // import logo from "@/app/images/NavbarImages/postgaitlogo"
// import logo from "../../images/NavbarImages/postgaitLogo.svg"
// import Image from 'next/image'
// import Link from 'next/link'
// export default function Navbar() {

//     const [isNavVisible, setIsNavVisible] = useState(false);

//     const toggleNav = () => {
//       setIsNavVisible((prev) => !prev);
//     };
//   return (
  
//       <header className="bg-white shadow-sm relative !z-10">
//   <div className="mx-auto  px-4 sm:px-6 lg:px-8 z-50">
//     <div className="flex h-16 items-center justify-between">
//       <div className="md:flex md:items-center md:gap-12">
//         {/* <a className="block text-teal-600" href="#">
//           <span className="sr-only">Home</span>
//           <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
//               fill="currentColor"
//             />
//           </svg>
//         </a> */}
//         <Image src={logo} alt='postgait'/>
//       </div>

//       <div className="hidden md:block">
//         <nav aria-label="Global">
//           <ul className="flex items-center gap-6 text-sm">

//           <li>
//               <Link className="text-gray-500 transition hover:text-gray-500/75" href="Home"> Home </Link>
//             </li> 

//             <li>
//               <Link className="text-[#808080] transition hover:text-gray-500/75" href="About"> About </Link>
//             </li>

           

//             <li>
//               <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </Link>
//             </li>

//             <li>
//               <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blogs </Link>
//             </li>

           
//           </ul>
//         </nav>
//       </div>

//       <div className="flex md:justify-between md:w-[400px] items-center gap-4 ">
//         {/* <div>
//             <p>ali</p>
//         </div> */}

//         <div className="sm:flex sm:gap-4">
//           <Link
//             className="rounded-md bg-transparent  px-5 py-2.5 text-sm font-medium text-[#FC746C] shadow"
//             href="#"
//           >
//             Login
//           </Link>

//           <div className="hidden sm:flex">
//             <Link
//               className="rounded-md bg-[#FC746C] px-5 py-2.5 text-sm font-medium text-white"
//               href="#"
//             >
//               Start For Free
//             </Link>
//           </div>
//         </div>

       

//     <div className="block md:hidden">
//       {/* Toggle Button */}
//       <button
//         onClick={toggleNav}
//         className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       {isNavVisible && (
//         <nav aria-label="Global" className="mt-4 bg-gray-50 p-4 rounded w-[100%] shadow-md">
//           <ul className="flex flex-col items-start gap-4 text-sm">
//             <li>
//               <Link
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="Home"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="About"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 Blogs
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
 

    
//       </div>
//     </div>
//   </div>
// </header>
  
//   )
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/NavbarImages/postgaitLogo.svg";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => setIsNavVisible((prev) => !prev);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Postgait" width={150} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Main Navigation">
              <ul className="flex items-center gap-6 text-sm font-medium">
                <li>
                  <Link
                    href="/home"
                    className="text-gray-600 transition hover:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 transition hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 transition hover:text-gray-800"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-gray-600 transition hover:text-gray-800"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2 text-sm font-medium text-[#FC746C] border border-[#FC746C] rounded-md transition hover:bg-[#FC746C] hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-sm font-medium text-white bg-[#FC746C] rounded-md shadow-md transition hover:bg-[#e25c5c]"
            >
              Start For Free
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              aria-expanded={isNavVisible}
              aria-controls="mobile-menu"
              className="p-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isNavVisible && (
          <nav
            id="mobile-menu"
            className="absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col gap-4 p-4 text-sm font-medium">
              <li>
                <Link
                  href="/Home"
                  className="block text-gray-600 transition hover:text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="block text-gray-600 transition hover:text-gray-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-600 transition hover:text-gray-800"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block text-gray-600 transition hover:text-gray-800"
                >
                  Blogs
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href="/login"
                  className="block w-full text-center px-5 py-2 text-sm font-medium text-[#FC746C] border border-[#FC746C] rounded-md transition hover:bg-[#FC746C] hover:text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block w-full text-center px-5 py-2 text-sm font-medium text-white bg-[#FC746C] rounded-md shadow-md transition hover:bg-[#e25c5c]"
                >
                  Start For Free
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
