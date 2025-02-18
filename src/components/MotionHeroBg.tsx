"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBg } from "@/components/HeroBg";


const MotionBg = () => (
  <motion.div animate={{ opacity: 1, scale:1 }} initial={{ opacity: 0 , scale: 0}} >
   
          <HeroBg />
  </motion.div>
);

export default MotionBg;
