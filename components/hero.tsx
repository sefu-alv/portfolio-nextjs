"use client";
import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },  
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },  
};

const fadeInUpVariantsWithDelay = (delay: number) => ({
  initial: {
    opacity: 0,
    y: 100,
  },  
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
      delay: delay,
    },
  },  
});

export default function Hero() {
  return (
    <section className="flex relative flex-col-reverse justify-center w-full lg:flex-row min-h-screen sm:mt-[5rem] lg:mt-[15rem] gap-[3rem]">
      <div className=" text-center lg:text-left  ">
        <motion.p 
          variants={fadeInUpVariants}
          initial="initial"
          animate="animate"
          className="text-black"
        >
          <motion.span 
            variants={fadeInUpVariantsWithDelay(0.2)}
            initial="initial"
            animate="animate"
            className="sm:text-7xl lg:text-9xl"
          >
            Hello! My name is <br /> <motion.span
            variants={fadeInUpVariantsWithDelay(0.3)}
            initial="initial"
            animate="animate"
            className='lg:text-9xl'
            > 
            Sefufim Alvarez </motion.span>
          </motion.span>
          <br />
          <motion.span 
            variants={fadeInUpVariantsWithDelay(0.4)}
            initial="initial"
            animate="animate"
            className="text-6xl"
          >
            I am a Fullstack Developer 
          </motion.span>
        </motion.p>

        <motion.div 
         variants={fadeInUpVariantsWithDelay(0.6)}
         initial="initial"
         animate="animate"
        className="flex mt-4 space-x-6">
          <a href="#" className="text-black text-4xl">
            <SiGithub />
          </a>
          <a href="#" className="text-black text-4xl">
            <SiLinkedin />
          </a>
          <a href="#" className="text-black text-4xl">
            <SiInstagram />
          </a>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Contact Me
    </Button>
        </motion.div>
      </div>
    </section>
  );
}
