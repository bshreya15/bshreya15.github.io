"use client";
import MotionBg from "@/components/MotionHeroBg";
import MotionImage from "@/components/MotionHeroImage";
import MotionLinks from "@/components/MotionHeroLinks";
import MotionText from "@/components/MotionHeroText";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView]);
  return (
    <section id="home" ref={ref}>
      <div className="py-24 md:py-32 md:mt-8 lg:py-28 lg:mt-12 relative overflow-x-clip">
        <MotionBg />
        <div className="container">
          <MotionImage />
          <div className="max-w-lg mx-auto">
            <MotionText />
          </div>
          <MotionLinks />
        </div>
      </div>
    </section>
  );
};
