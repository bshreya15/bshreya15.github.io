import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Master's in Data and Computational Science",
    location: "University College Dublin, Dublin, IRE",
    description:"I am motivated by the transformative power of data in the age of AI. The program deepens my understanding of machine learning, data analytics, enabling me to uncover valuable insights from complex datasets. As AI continues to shape industries, I see immense potential in combining this knowledge with my front-end expertise to create more intelligent, data-driven user experiences that adapt to user needs in real time.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  
  {
    title: "Frontend Consultant",
    location: "Deloitte India, Bengaluru, IN",
    description:
      "Got the opportunity to accelerate my career as a Frontend Consultant. I gained experience in building scalable solutions tailored to diverse business needs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  
  {
    title: "Frontend Analyst",
    location: "Accenture Pvt Ltd, Pune, IN",
    description:
      "I joined as a Frontend Associate and promoted to Analyst for Barclays UK. I got hands-on experience with React, JavaScript, TypeScript, jQuery, and WCAG guidelines with the opportunity to lead development projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Bachelor's in Engineering",
    location: "VTU, Bengaluru, IN",
    description:
      "I completed my Bachelor's in Telecommunication Engineering at Visvesvaraya Technological University, graduating with First Class honors.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;