// import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ExperienceSection } from "@/sections/Experience";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TapeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
