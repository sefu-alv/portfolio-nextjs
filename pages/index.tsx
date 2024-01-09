"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Footer from "@/components/Footer/footer";
import ProjectDisplay from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Your SEO Title Here</title>
      </Head>
      <main>
        <Hero/> 
        <About/>
        <ProjectDisplay/>
        <Contact/>
      </main>
    </>
  )
}
