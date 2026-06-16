import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectSection from "@/components/sections/project";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
