"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { BsLinkedin } from "react-icons/bs";
// import { HeroBg } from "@/components/HeroBg";
import { FaGithubSquare } from "react-icons/fa";


const linHref = "http://linkedin.com/in/bakshi-shreya/";
const gitHref = "https://github.com/bshreya15";

const MotionLinks = () => (
  <motion.div animate={{ opacity: 1, scale:1 }} initial={{ opacity: 0 , scale: 0}}>
    <div className="flex flex-col md:flex-row relative z-10 justify-center items-center mt-4 gap-4">
    <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-8 rounded-xl cursor-pointer hover:scale-110 active:scale-105 transition"
            >
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </Link>

            <Link
              href="/CV-Shreya_Bakshi.pdf"
              className="inline-flex items-center gap-2 border border-white/15 px-10 h-[3.4rem] rounded-xl cursor-pointer hover:scale-[1.15] active:scale-105 transition"
              download
              target="_blank"
            >
              <span className="font-semibold">Download CV</span>
              <ArrowDown className="size-4" />
            </Link>

            <div className="flex gap-4">
              <a
                href={linHref}
                target="_blank"
                className="border-white bg-white text-gray-900 h-12 p-4 rounded-xl cursor-pointer flex items-center hover:scale-[1.15] active:scale-105 transition"
              >
                <BsLinkedin className="size-8" />
              </a>

              <a
                href={gitHref}
                target="_blank"
                className="border-white bg-white text-gray-900 h-12 p-4 rounded-xl cursor-pointer flex items-center hover:scale-110 active:scale-105 transition"
              >
                <FaGithubSquare className="size-8" />
              </a>
            </div>
    </div>
  </motion.div>
);

export default MotionLinks;
