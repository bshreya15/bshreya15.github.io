import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { Card } from "@/components/Card";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import GraphqlIcon from "@/assets/icons/graphql.svg";
import mapImage from "@/assets/images/map-dublin.png";
import smileMemoji from "@/assets/images/girl1.png";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

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

export const AboutSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader sep="About Me" title="A Glimpse Into My World" />
        <div className="mt-20 flex flex-col gap-8">
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
                  ensure compliance and accessibility. I am always learning and
                  growing, and I am excited to see where my journey takes me
                  next.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
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
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
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

            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                quality={95}
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
    </div>
  );
};
