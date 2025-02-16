"use-client";
import MotionBg from "@/components/MotionHeroBg";
import MotionImage from "@/components/MotionHeroImage";
import MotionLinks from "@/components/MotionHeroLinks";
import MotionText from "@/components/MotionHeroText";

export const HeroSection = () => {
  return (
    <section>
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
