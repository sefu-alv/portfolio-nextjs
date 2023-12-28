"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import ProjectDisplay from "@/components/projects";
import Contact from "@/components/contact";


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
