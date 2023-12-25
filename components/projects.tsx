import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectsData } from "@/lib/data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDisplay() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const containers = document.querySelectorAll(".project");
      containers.forEach((container) => {
        gsap.to(container, {
          x: () =>
            -(container as HTMLElement).offsetWidth -
            document.documentElement.clientWidth,
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => "+=" + (container as HTMLElement).offsetWidth,
          },
        });
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen px-8">
      <div className="flex justify-start ">
        <p className="text-2xl xs:text-4xl lg:text-7xl font-bold text-black mt-[4rem] lg:mt-[10rem] 3xl:mt-[15rem]">
          Projects
        </p>
      </div>
      <hr className="w-[100%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex w-full flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project h-screen w-full flex flex-col md:flex-row justify-center items-center"
          >
            <div className="w-full md:w-[45%] h-[35rem] items-center">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={900}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-[30%] h-[100%] p-4 flex items-start sm:items-center">
              <div className="flex flex-wrap">
                <p className="text-5xl font-bold">{project.title}</p>
                <p>{project.description}</p>
                <div className="w-full gap-4 flex flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
