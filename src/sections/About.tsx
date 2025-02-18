"use client";

import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader sep="About Me" title="A Glimpse Into My World" description="Learn about my journey, combining academic success with real-world experience in tech." />
          <div className="mt-12 flex flex-col gap-8">
            <div className="">
              <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none">
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <div className="flex flex-col p-6 md:py-8 md:px-10">
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-9 text-emerald-300" />
                    <h3 className="font-serif text-3xl">Learn more about me</h3>
                  </div>
                  <p className="text-base text-white/60 mt-4 text-justify">
                    I am pursuing MSc in Data and Computational Science at{" "}
                    <Link
                      className="link-base"
                      href="https://www.ucd.ie/"
                      target="_blank"
                    >
                      University College Dublin, Ireland
                    </Link>
                    , where I have had the opportunity to build real-world
                    projects using Python. I was also honored to win the{" "}
                    <Link className="link-base" href="#" target="_blank">
                      Bronze Award at Student Hackathon 2025
                    </Link>{" "}
                    and{" "}
                    <Link className="link-base" href="#" target="_blank">
                      Prototype Power Award at Student Hackathon 2024
                    </Link>{" "}
                    at UCD. With over 3 years of professional experience as a
                    React developer, I specialize in building responsive and
                    efficient web applications using modern frameworks like
                    React.js, Next.js, and libraries such as TypeScript and
                    JavaScript. My expertise extends to HTML, CSS, AEM, and the
                    creation of scalable solutions tailored to diverse business
                    needs. I am proficient in crafting intuitive and accessible
                    user interfaces while adhering to WCAG 2.1 guidelines to
                    ensure compliance and accessibility. I am always learning
                    and growing, and I am excited to see where my journey takes
                    me next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
