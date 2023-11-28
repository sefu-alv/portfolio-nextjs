"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { FaHome, FaFolder } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function Header() {
  return (
    <header className=" z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-3/4 border
     border-white border-opacity-40 bg-[#ffffff] bg-opacity-80 shadow-black/[0.03] backdrop-blur-[0.5rem]
      top-6 sm:h-[3/25rem] rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem]  flex-wrap items-center justify-center gap-y-0 gap-1 text-[0.9rem] font-medium text-black sm:w-[initial] sm:flex-nowrap  xl:gap-[8rem]  lg:gap-[4rem] lg:text-[1.4pc] sm:gap-5 ">
          {links.map((link) => (
            <li key={link.hash} className="flex items-center justify-center">
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center py-3 px-3 hover:text-neutral-600"
              >
                <span className="md:inline hidden">{link.name}</span>
                {link.name === "Home" && (
                  <FaHome className="md:hidden inline" />
                )}
                {link.name === "About" && (
                  <IoPersonSharp className="md:hidden inline" />
                )}
                {link.name === "Projects" && (
                  <FaFolder className="md:hidden inline" />
                )}
                {link.name === "Skills" && (
                  <FaUserGear className="md:hidden inline" />
                )}
                {link.name === "Contact" && (
                  <MdEmail className="md:hidden inline" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
