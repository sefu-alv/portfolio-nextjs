"use client";
import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="flex relative flex-col-reverse justify-center w-full xxs:mt-0 lg:flex-row min-h-screen mt-[5rem]  gap-[3rem]">
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
  className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-9xl"
>
  Hello! My name is <br />{" "}
  <motion.span
    variants={fadeInUpVariantsWithDelay(0.3)}
    initial="initial"
    animate="animate"
    className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-9xl"
  >
    Sefufim Alvarez{" "}
  </motion.span>
</motion.span>
<br />
<motion.span
  variants={fadeInUpVariantsWithDelay(0.4)}
  initial="initial"
  animate="animate"
  className="text-xl sm:text-1xl md:text-4xl lg:text-6xl xl:text-6xl"
>
  I am a Fullstack Developer
</motion.span>
        </motion.p>

        <motion.div
          variants={fadeInUpVariantsWithDelay(0.6)}
          initial="initial"
          animate="animate"
          className="flex mt-4 justify-center sm:justify-start  space-x-6"
        >
          <a href="#" className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <SiGithub />
          </a>
          <a href="#" className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <SiLinkedin />
          </a>
          <a href="#" className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <SiInstagram />
          </a>
        </motion.div>
        <motion.div
        variants={fadeInUpVariantsWithDelay(0.8)}
        initial="initial"
        animate="animate"
        className="flex justify-center mt-[7rem]"
        >
          <p>
            <span className="text-black text-2xl">Tap to see my work</span>
          </p>
        <svg
       className="absolute left-0 right-0 animate-bounce mx-auto md:mt-[2rem] lg:mt-[8rem]  w-[6rem] h-[6rem]"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>10-Arrow Down</title>
        <g id="_10-Arrow_Down" data-name="10-Arrow Down">
          <path d="M25,0H7A7,7,0,0,0,0,7V25a7,7,0,0,0,7,7H25a7,7,0,0,0,7-7V7A7,7,0,0,0,25,0Zm5,25a5,5,0,0,1-5,5H7a5,5,0,0,1-5-5V7A5,5,0,0,1,7,2H25a5,5,0,0,1,5,5Z" />
          <path d="M17,23.59V5H15V23.59L9.71,18.29,8.29,19.71l7,7a1,1,0,0,0,1.41,0l7-7-1.41-1.41Z" />
        </g>
      </svg>
        </motion.div>
      </div>
    </section>
  );
}
