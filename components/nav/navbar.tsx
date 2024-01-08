"use client";
import { useState, useEffect, useRef } from "react";
import { sectionIds } from "./sectionsId";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
     
      className="shadow-black/[0.03] backdrop-blur-[0.5rem] sticky top-0 z-50"
    >
      <nav className="bg-transparent sticky ">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 w-full">
            <div className=" inset-y-0 left-0 flex items-center lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                {/* ... */}
              </button>
            </div>
            <div className="flex lg:justify-between items-center justify-end w-full">
              <div className="flex-shrink-0 ">
                <div className="bg-black rounded-md items-center justify-center flex h-[2.5rem] w-[10rem]  sm:h-[3.5rem] sm:w-[12rem] ">
                  <span className="text-xl sm:text-2xl text-white">
                    {"{ S E F U F I M }"}
                  </span>
                </div>
              </div>
              <div className="hidden lg:block sm:ml-6">
                <div className="flex space-x-4 text-xl font-medium">
                  {sectionIds.map(({ id, icon: Icon, label }) => (
                    <a
                    key={id}
                    href={`#${id}`}
                    className={`flex items-center  hover:bg-gray-700 hover:text-white px-3 py-2 gap-2 rounded-md`}
                  
                  >
                      <Icon />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
              {/* ... */}
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } lg:hidden flex flex-col px-2 pt-2 pb-3 space-y-1`}
              >
                {sectionIds.map(({ id, icon: Icon, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}