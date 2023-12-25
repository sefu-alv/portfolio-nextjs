import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { projectsData } from '../lib/data';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ProjectImage({ title, imageUrl, description }: { title: string, imageUrl: string, description: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex justify-center flex-col-reverse w-full items-center relative">
      <div ref={ref} className=" h-96 relative max-h-90vh m-5 bg-white overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
        />
      </div>
      <div>
      <motion.p className="font-normal text-2xl w-1/4" style={{ y }}>{title}</motion.p>
      <motion.p className="font-normal text-2xl w-1/4" style={{ y }}>{description}</motion.p>
      </div>
     
    </section>
  );
}

export default function projectDisplay() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {projectsData.map((project, index) => (
        <ProjectImage key={index} title={project.title} imageUrl={project.imageUrl} description={project.description} />
      ))}
    </>
  );
}