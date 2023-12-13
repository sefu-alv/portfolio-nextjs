"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

import { useRef } from 'react';

export default function Home() {
 

  return (
    <main>
      <Hero/> 
      <About/>
      <Footer/>
    </main>
  )
}
