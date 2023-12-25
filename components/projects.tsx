'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectsData } from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDisplay() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const containers = document.querySelectorAll(".weather, .weather2, .weather3");
      containers.forEach(container => {
        gsap.to(container, {
          x: () => -(container as HTMLElement).offsetWidth - document.documentElement.clientWidth,
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => "+=" + (container as HTMLElement).offsetWidth
          }
        });
      });
    }
  }, []);

  return (
    <div className='flex w-full flex-wrap justify-center min-h-screen'>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="weather w-[25rem] h-[25rem] lg:w-[50rem] lg:h-[50rem]"></div>
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="weather2 w-[25rem] h-[25rem] lg:w-[50rem] lg:h-[50rem]"></div>
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="weather3 w-[25rem] h-[25rem] lg:w-[50rem] lg:h-[50rem]"></div>
      </div>
    </div>
  )
}