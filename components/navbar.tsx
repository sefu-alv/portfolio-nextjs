'use client';
import React, { useState, useRef ,useEffect } from 'react';
import { motion } from "framer-motion";
import { FaHome, FaFolder } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
return (
<motion.div
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className='shadow-black/[0.03] backdrop-blur-[0.5rem] sticky top-0 z-50'
>
<nav className="bg-white sticky ">
<div className="w-full px-2 sm:px-6 lg:px-8">
  <div className="relative flex items-center justify-between h-16 w-full">
    <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() =>
               setIsOpen(!isOpen)} className="inline-flex items-center justify-end p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
               <span className="sr-only">Open main menu</span>
               <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
               <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
         </div>
         <div className="flex sm:justify-between items-center justify-end w-full">
  <div className="flex-shrink-0 ">
    <div className='bg-black rounded-md items-center justify-center flex h-[2.5rem] w-[10rem]  sm:h-[3.5rem] sm:w-[12rem] '>
      <span className='text-xl sm:text-2xl text-white'>{ "{ S E F U F I M }" }</span>
    </div>
  </div>
      <div className="hidden sm:block sm:ml-6">
               
               <div className="flex space-x-4">
                  <a href="#Home" className="flex items-center text-black hover:bg-gray-700 hover:text-white px-3 py-2 gap-2 rounded-md text-sm font-medium">
                     <FaHome/>
                     <span>Home</span>
                  </a>
                  <a href="#About" className="flex items-center text-black hover:bg-gray-700 hover:text-white px-3 py-2 gap-2  rounded-md text-sm font-medium">
                     <IoPersonSharp/>
                     <span>About</span>
                  </a>
                  <a href="#Projects" className="flex items-center text-black hover:bg-gray-700 hover:text-white px-3 py-2 gap-2  rounded-md text-sm font-medium">
                     <FaFolder/>
                     <span>Projects</span>
                  </a>
                  <a href="#Skills" className="flex items-center text-black hover:bg-gray-700 hover:text-white px-3 py-2 gap-2  rounded-md text-sm font-medium">
                     <FaUserGear/>
                     <span>Skills</span>
                  </a>
                  <a href="#Contact" className="flex items-center text-black hover:bg-gray-700 hover:text-white px-3 py-2  gap-2 rounded-md text-sm font-medium">
                     <MdEmail/>
                     <span>Contact</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden flex flex-col px-2 pt-2 pb-3 space-y-1`}>
  <a href="#Home" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><FaHome/>Home</a>
  <a href="#About" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><IoPersonSharp/>About</a>
  <a href="#Projects" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><FaFolder/>Projects</a>
  <a href="#Skills" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><FaUserGear/> Skills</a>
  <a href="#Contact" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><MdEmail/>Contact</a>
</div>
</nav>
</motion.div>
);
}
