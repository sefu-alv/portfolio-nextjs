"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import projectDisplay from "@/components/projects";


import ProjectDisplay from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero/> 
      <About/>
      <ProjectDisplay/>
    </main>
  )
}
