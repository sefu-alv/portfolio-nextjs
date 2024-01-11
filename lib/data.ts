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
      "This website allows users to search for movies, see detailed information about each movie, including cast, ratings. It also provides recommendations based on user preferences. Built with JavaScript, Foundation framework and The Movie Database (TMDB) API.",
    tags: ["HTML", "Foundation", "CSS", "JavaScript", "jQuery", "API"],
    imageUrl: "/movienest.svg",
    repoUrl: "https://github.com/sefu-alv/movie-nest?tab=readme-ov-file",
    liveUrl: "https://lundj227.github.io/movie-nest/",
  },
  {
    title: "Game Yap",
    description:
      "Discover and explore games effortlessly on this website. It provides detailed information, ratings, and reviews for each game. Built using JavaScript for interactivity, Tailwind CSS for a clean look, and MYSQL for data management. It utilizes the RAWG API for comprehensive gaming details and includes user authentication for a personalized experience",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "MySql", "API"],
    imageUrl: "/gameYap.svg",
    repoUrl: "https://github.com/sefu-alv/Game-Yap?tab=readme-ov-file",
    liveUrl: "https://desolate-sea-54298-2d2f1e6b62d8.herokuapp.com/",
  },
  {
    title: "Weather App",
    description:
      "This website provides users with real-time weather updates and a comprehensive 5-day forecast. Developed using Bootstrap as its CSS framework, the site seamlessly integrates JavaScript and APIs, ensuring a simple yet effective experience for users to stay updated on weather conditions",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    imageUrl: "/weather.svg",
    repoUrl: "https://github.com/sefu-alv/weather-forecast",
    liveUrl: "https://sefu-alv.github.io/weather-forecast/",
  },
  {
    title: "Note Taker",
    description: 'This app enables users to have a simplistic yet effective experience when writing notes, allowing them to save and delete their notes seamlessly. It was built using JavaScript, Node.js, and Express.js',
    tags: ["Node.js", "Express", "JavaScript"],
    imageUrl: "/noteTaker.svg",
    repoUrl: "https://github.com/sefu-alv/note-taker",
    liveUrl: "https://notes11-ad7760559b35.herokuapp.com/",


  }
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
