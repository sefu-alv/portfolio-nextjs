import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Movie Nest",
    description:
      "A movie database app. It has features like searching, save for later , sorting  and pagination. I was one of four developers that created this.",
    tags: ["HTML", "Foundation", "CSS", "JavaScript", "jQuery", "API"],
    imageUrl: "/place.png",
  },
  {
    title: "Game Yap",
    description:
      "A social media app for gamers. It has features like posting, commenting, and deleting comments. This also features a login system. I was one of three developers that created this.",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "MySql", "API"],
    // imageUrl:,
  },
  {
    title: "Weather App",
    description:
      "A weather app that shows the current weather and the forecast for the next 5 days. I was the sole developer that created this.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    // imageUrl:,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Figma",
] as const;