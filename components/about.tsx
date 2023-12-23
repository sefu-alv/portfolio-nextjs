/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@nextui-org/react";

import { TfiDownload } from "react-icons/tfi";

import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className=" z-20 w-full bg-white mt-screen px-8 min-h-screen"
    >
      <div className="flex justify-center ">
        <p className="text-2xl xs:text-4xl lg:text-7xl font-bold text-black mt-[4rem] lg:mt-[10rem] 3xl:mt-[15rem]">
          About Me
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center lg:mt-[12rem] gap-8 items-center mt-[2rem] ">
        <img
          className="w-32 h-32 lg:w-64 lg:h-64 md:w-96 md:h-96 2xl:w-[32rem] 2xl:h-[32rem] rounded-full object-cover"
          src="pfp.png"
          alt="profile"
          loading="lazy"
        />

        <div className="flex flex-col w-[95%] md:w-1/2 2xl:w-[40%] text-[12px] xs:text-base lg:text-3xl">
          <p className="text-[12px] xs:text-base lg:text-2xl">
            Hi there &apos;👋🏼&apos;, I&apos;m{" "}
            <span className="text-[#FFD700]">Sefufim Alvarez</span>! I&apos;m a
            Fullstack developer from Salem, Oregon. After switching majors
            multiple times, I discovered computer science and have been sold
            ever since. I thrive in collaborative environments and enjoy working
            with teams to solve challenges. At the moment, I&apos;m studying
            computer science at Western Oregon University and completing a
            coding boot camp at the University of Oregon.
          </p>

          <p className="lg:mb-4">
            In terms of roles, I&apos;m passionate about roles that involve
            innovative software development, particularly in Fullstack
            development or software engineering. I&apos;m interested in freelance
            work as it allows me to leverage my skills in a diverse range of
            projects while delivering high-quality solutions to clients.
          </p>

          <div className="flex items-center mt-10 mb-5 ">
            <a href="./Resume.pdf">
              <Button className="bg-grey-700 border-3 border-black w-[10rem] h-[40px] lg:w-[15rem] lg:h-[4rem] text-lg lg:text-2xl">
                Resume <TfiDownload />
              </Button>
            </a>
            <div className="flex px-2 space-x-6 text-2xl lg:text-5xl">
              <a
                href="https://github.com/sefu-alv"
                className="text-black hover:scale-150 transition-transform duration-500"
              >
                <SiGithub />
              </a>
              <a
                href="#"
                className="text-black hover:scale-150 transition-transform duration-500"
              >
                <SiLinkedin />
              </a>
              <a
                href="#"
                className="text-black  hover:scale-150 transition-transform duration-500"
              >
                <SiInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
