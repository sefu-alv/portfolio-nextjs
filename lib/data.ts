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
      "This website allows users to search for games, see detailed information about each game, including ratings, reviews, It also has a authentication. Built with JavaScript, Tailwind CSS, MYSQL and RAWG API.",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "MySql", "API"],
    imageUrl: "/gameYap.svg",
    repoUrl: "https://github.com/sefu-alv/Game-Yap?tab=readme-ov-file",
    liveUrl: "https://desolate-sea-54298-2d2f1e6b62d8.herokuapp.com/",
  },
  {
    title: "Weather App",
    description:
      "This app allows user to check the weather and their 5 day forecast built with JavaScript and APIs",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    imageUrl: "/weather.svg",
    repoUrl: "https://github.com/sefu-alv/weather-forecast",
    liveUrl: "https://sefu-alv.github.io/weather-forecast/",
  },
  {
    title: "Note Taker",
    description: 'This app allows user to write, save and delete notes built with JavaScript, Node.js and Express.js',
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
