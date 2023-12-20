"use client";
import React, { useEffect, useState } from "react";
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

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      let height = window.innerHeight;
      let opacity = 1 - scrollTop / height;
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
    className="sticky top-0 z-10 flex justify-center items-center w-full h-screen lg:flex-row gap-[3rem]"
    style={{ opacity: opacity }}
  >
      
      <div className="  lg:text-left  ">
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
            className="text-3xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-9xl"
          >
            Hello! My name is <br />{" "}
            <motion.span
              variants={fadeInUpVariantsWithDelay(0.3)}
              initial="initial"
              animate="animate"
              className=" text-3xl font-bold xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
            >
              Sefufim Alvarez{" "}
            </motion.span>
          </motion.span>
          <br />
          <motion.span
            variants={fadeInUpVariantsWithDelay(0.4)}
            initial="initial"
            animate="animate"
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl"
          >
            I am a Fullstack Developer
          </motion.span>
        </motion.p>

        <motion.div
          variants={fadeInUpVariantsWithDelay(0.6)}
          initial="initial"
          animate="animate"
          className="flex mt-4 justify-start   space-x-6"
        >
          <a
            href="https://github.com/sefu-alv"
            className="text-black hover:scale-150 transition-transform duration-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <SiGithub />
          </a>
          <a
            href="#"
            className="text-black text-xl hover:scale-150 transition-transform duration-500 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <SiLinkedin />
          </a>
          <a
            href="#"
            className="text-black text-xl hover:scale-150 transition-transform duration-500 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <SiInstagram />
          </a>
        </motion.div>
        <motion.div
          variants={fadeInUpVariantsWithDelay(0.8)}
          initial="initial"
          animate="animate"
          className="flex justify-center mt-[4rem]"
        >
          <p>
            <span className="text-black text-2xl">Tap to see more about me</span>
          </p>
          <svg
  onClick={scrollToNextSection}
  className="absolute left-0 right-0 animate-bounce mx-auto mt-[5rem] md:mt-[5rem] lg:mt-[8rem] w-[4rem] h-[4rem]  lg:w-[6rem] lg:h-[6rem]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
>
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
