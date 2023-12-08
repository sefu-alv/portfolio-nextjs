import Header from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './provider'
import Hero from '@/components/hero'
import link from 'next/link'
import Nav  from '@/components/navbar'
import { Navbar } from '@nextui-org/react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sefufim',
  description: 'Sefufim is a front-end developer and designer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-[#292a2c] h-[150vh] relative  pt-28 sm:pt-36`}>
    <div className='bg-[#b7c5ad] -z-2 absolute top-[50rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] animate-move-background1'></div>
      <div className='bg-[#898888] -z-2 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[60rem] md:left-[-33rem]  xl:gap-[12rem]  lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] animate-move-background2'></div>
      <Provider>
      
      <Header/>
      <main>
    
        {children}
        <Hero />
      </main>
      </Provider>
      
    </body>
  </html>
  
  )
}
