import React from "react";


export default function About() {
  return (
    <section id="about" className="relative  w-full h-screen">
      <div className="flex justify-center">
        <p className="text-[5pc] font-bold text-black">About Me</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
        <img
          className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
          src="pfp.png"
          alt="profile"
        />

        <p className="text-black text-2xl md:w-1/2 2xl:w-[40%]">
          Hi there 👋🏼, I'm{" "}
          <span className="text-[#FFD700]">Sefufim Alvarez</span>! I'm a
          Fullstack developer from Salem, Oregon. After switching majors
          multiple times, I discovered computer science and have been sold ever
          since. I thrive in collaborative environments and enjoy working with
          teams to solve challenges. At the moment, I'm studying computer
          science at Western Oregon University and completing a coding boot camp
          at the University of Oregon.
        </p>
      </div>
    </section>
  );
}