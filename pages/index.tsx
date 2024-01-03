"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Footer from "@/components/footer";
import ProjectDisplay from "@/components/sections/projects";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <main>
      <Hero/> 
      <About/>
      <ProjectDisplay/>

      <Contact/>
    </main>
  )
}
