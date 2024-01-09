import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./global.css";
import Navbar from '../components/nav/navbar';
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col min-h-screen ${inter.className} bg-gradient-to-r from-indigo-500`}
    >
      <Head>
        <title>Sefufim</title>
        <meta name="keyword" content="portfolio, typescript, developer, react, nextjs" />
        <meta name="google-site-verification" content="Z94gNptf5Vpn91g8H3nlkGf_DZXKZORD-HY52DTVqn0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Other components */}
      <Navbar />
      <main className="flex-grow relative overflow-hidden">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
