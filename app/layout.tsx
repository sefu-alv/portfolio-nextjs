import React from 'react'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import './global.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className} bg-[#292a2c] `}>
      {/* <div className='bg-[#b7c5ad] -z-2 absolute top-[50rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] animate-move-background1'></div>
      <div className='bg-[#898888] -z-2 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[60rem] md:left-[-33rem]  xl:gap-[12rem]  lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] animate-move-background2'></div> */}
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}