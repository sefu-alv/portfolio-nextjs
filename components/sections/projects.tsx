import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectsData } from "@/lib/data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDisplay() {
  useEffect(() => {
    const projectElements: Element[] = gsap.utils.toArray('.project') as Element[];
  
    projectElements.forEach((el: Element) => {
      gsap.from(el, {
        x: '-=100',
        autoAlpha: 0,
        duration: () => window.innerWidth < 640 ? '.5' : '1',
        scrollTrigger: {
          trigger: el,
          start: () => window.innerWidth < 640 ? 'top center' : '35% center',
          end: 'bottom center',
          toggleActions: 'play',
          markers: false,
        },
      });
    });
  }, []);
  return (
    <div id="Projects" className="w-full min-h-screen px-8">
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
            <div className="w-full md:w-[45%] h-[25rem] flex items-center">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1000}
                height={600}
                className="object-cover images"
              />
            </div>
            <div className="w-full md:w-[40%] h-[35rem] p-4 flex items-start sm:items-center ">
              <div className="flex flex-wrap">
                <p className="text-5xl font-bold py-4">{project.title}</p>
                <p className="py-4 text-sm lg:text-xl">{project.description}</p>
                <div className="w-full gap-4 flex py-2 lg:text-xl flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="flex gap-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Live Demo
                      </button>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
