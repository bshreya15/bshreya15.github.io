"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import devImage from "@/assets/images/dev-img.jpeg"; 

const MotionImage = () => (
  <motion.div animate={{ opacity: 1, scale:1 }} initial={{ opacity: 0 , scale: 0}} className="flex flex-col items-center">
    <>
      <Image
        className="size-[150px] md:size-[230px] rounded-full border-[0.35rem] border-white object-cover"
        src={devImage}
        alt="dev image"
        quality={100}
        priority={true}
      />
      <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 mt-4 inline-flex items-center gap-4 rounded-lg">
        <div className="bg-green-500 size-2.5 rounded-full relative">
          <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
        </div>
        <div className="text-sm font-medium lg:text-lg">
          Actively looking for new roles !
        </div>
      </div>
    </>
  </motion.div>
);

export default MotionImage;
