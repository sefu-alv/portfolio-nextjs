import React from 'react'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Head from 'next/head'
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Other components */}
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}