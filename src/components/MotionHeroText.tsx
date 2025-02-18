"use client";

import React from "react";
import { motion } from "framer-motion";

const MotionText = () => (
  <motion.div
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0 }}
  >
    <>
      <h1 className="font-serif text-2xl md:text-5xl text-center mt-4 tracking-wide">
        Building Exceptional User Experiences
      </h1>
      <p className="my-8 text-center text-white/60 md:text-lg">
        <span className="font-bold">Hello! I'm Shreya.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I specialize
        in{" "}
        <span className="italic">
          transforming designs into functional, high-performing applications.
        </span>
      </p>
    </>
  </motion.div>
);

export default MotionText;
