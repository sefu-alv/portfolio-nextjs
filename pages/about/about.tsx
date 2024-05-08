/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@nextui-org/react";

import { TfiDownload } from "react-icons/tfi";

import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function About() {
  return (
    <main
      id="About"
      className=" z-20 w-full bg-white mt-screen  min-h-screen px-8"
    >
      <div className="flex justify-start ">
        <p className="text-2xl xs:text-4xl lg:text-7xl font-bold text-black mt-[4rem] lg:mt-[5rem] 3xl:mt-[10rem]">
          About Me
        </p>
      </div>
      <hr className="w-[100%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex flex-col min-h-screen lg:flex-row justify-center lg:mt-[5rem] gap-8 items-center mt-[2rem] ">
        <img
          className="w-32 h-32 lg:w-64 lg:h-64 md:w-64 md:h-64 lg:mb-[10rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full object-cover"
          src="pfp.png"
          alt="profile"
          loading="lazy"
        />

        <div className="flex flex-col w-[95%] md:w-[60%] 2xl:w-[40%] text-[12px] xs:text-base lg:text-2xl">
          <p>
            Hi there 👋🏼, I&apos;m{" "}
            <span className="text-[#FFD700]">Sefufim Alvarez</span>! I&apos;m a
            Fullstack developer from Salem, Oregon. After switching majors
            multiple times, I discovered computer science and have been sold
            ever since. I thrive in collaborative environments and enjoy working
            with teams to solve challenges. At the moment, I&apos;m studying
            computer science at Portland State University and have completed a
            coding boot camp at the University of Oregon.
          </p>

          <p className="lg:mb-4">
            I&apos;m currently open to new opportunities! If you&apos;re
            interested in collaborating or working together, feel free to reach
            out! Whether it&apos;s a potential project, freelance work, or just
            a friendly chat, I&apos;m always excited to connect.
          </p>

          <div className="flex items-center mt-10 mb-5 ">
            <a href="./Resume.pdf">
              <Button className="bg-grey-700 border-3 border-black w-[10rem] h-[40px] lg:w-[15rem] lg:h-[4rem] text-lg lg:text-2xl ">
                Resume <TfiDownload />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
