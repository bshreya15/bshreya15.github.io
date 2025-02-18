"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import GraphqlIcon from "@/assets/icons/graphql.svg";
import { Fragment, use, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { experiencesData } from "@/lib/data";
import { TapeSection } from "./Tape";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Redux",
    iconType: ReduxIcon,
  },
  {
    title: "GrapghQL",
    iconType: GraphqlIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Illustration",
    emoji: "🖌️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "60%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "46%",
    top: "65%",
  },
  {
    title: "Hiking",
    emoji: "🚶🏽‍♀️",
    left: "5%",
    top: "65%",
  },
];

const testimonials = [
  {
    name: "Akash Ghate",
    position: "AVP at Barclays",
    text: "I enjoyed working with Shreya for 2 years at Barclays. She was a valuable member of our frontend team and demonstrated an impressive command of React, JavaScript, TypeScript, jQuery, and WCAG guidelines, ensuring the seamless execution of our accessible user interfaces. Shreya also excels in deployment and debugging, which has significantly contributed to the reliability of our digital services.",
  },
  {
    name: "Asif Hussain",
    position: "Solution Architect at Barclays",
    text: "I worked with Shreya for 2 years at Barclays primarily in the Insurance and Savings domains. Shreya is an excellent Front-end developer with great work ethic. She was a strong member of the UI team and was able to complete tasks of all complexity with ease. I would highly recommend Shreya.",
  },
];

export const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }
  }, [inView]);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
      className=" py-16 lg:py-24 "
    >
      <div className="container">
        <SectionHeader
          sep="Experience"
          title="My Journey"
          description="My academic journey and job experiences that helped me build the foundation of my career."
        />
        <VerticalTimeline className="!mt-8 !mx-0 !w-full">
          {experiencesData.map((item) => (
            <React.Fragment key={item.title}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: "rgba(45, 55, 72, 0.3)",
                  color: "#FFFFFF99",
                  border: "1px solid rgba(0,0,0,0,05",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid  rgba(45, 55, 72, 0.3)",
                }}
                date={item.date}
                dateClassName="date-style"
                iconStyle={{ background: "#2d3744", color: "#FFFFFF99" }}
                icon={item.icon}
              >
                <h3 className="text-white font-sans font-normal">
                  {item.title}
                </h3>
                <p className="text-white font-sans font-normal !,mt-0">
                  {item.location}
                </p>
                <p className="font-sans font-normal !mt-1 text-justify">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>

        <div className="mt-8">
          <SectionHeader
            sep=""
            title="Recommendations"
            description="Feedback from my colleagues and clients."
          />
        </div>
        <div className="mt-6 lg:mt-12 flex flex-col gap-8 overflow-x-clip">
          <Fragment>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="p-6 md:p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-300 hover:cursor-pointer text-justify"
              >
                <div className="flex gap-4 items-center">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </Fragment>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-4 mt-8">
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              className=""
              title="My Toolbox"
              description="Tech & tools I can say i’m good at"
            />
            <ToolboxItems
              items={toolboxItems}
              className=""
              itemsWrapperCN="animate-move-left [animation-duration:18s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperCN="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond Code"
              description="My interests and hobbies beyond tech."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};
