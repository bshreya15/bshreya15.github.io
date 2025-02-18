"use client";
import grainImage from "@/assets/images/grain.jpg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map-dublin.png";
import smileMemoji from "@/assets/images/girl1.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import ContactForm from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView]);
  return (
    <motion.section
      id="contact"
      className="mt-24 scroll-mt-24"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader
        title="Contact Me"
        sep="Let's create something amazing together!"
      />
      <div className="pb-16 pt-4 lg:py-10">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-4 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 ">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage})`,
              }}
            ></div>

            <div className="flex flex-col gap-2 md:gap-4 items-center">
              <div>
                <p className="text-sm md:text-base mt-2">
                  Connect with me at{" "}
                  <Link
                    href="mailto:i.bakshi.shreya@gmail.com"
                    className="underline link-base--dark"
                  >
                    i.bakshi.shreya@gmail.com
                  </Link>{" "}
                  or fill out the form below.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="container pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                quality={100}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 from-emerald-300 to-sky-400 forced-color-adjust-none rounded-full bg-gradient-to-r after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-36 absolute map-memoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
