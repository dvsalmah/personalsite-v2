import SideNav from "@/components/layout/side-nav";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import SkillSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectSection from "@/components/sections/project";
import ContactSection from "@/components/sections/contact";

const SECTION_SPACING = "py-20 md:py-28";
const CONTAINER_WIDTH = "max-w-6xl mx-auto px-6 md:px-12 lg:px-20";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <SideNav />
      <main>
        <HeroSection sectionClassName={SECTION_SPACING} containerClassName={CONTAINER_WIDTH} />
        <SkillSection sectionClassName={SECTION_SPACING} containerClassName={CONTAINER_WIDTH} />
        <ExperienceSection sectionClassName={SECTION_SPACING} containerClassName={CONTAINER_WIDTH} />
        <ProjectSection sectionClassName={SECTION_SPACING} containerClassName={CONTAINER_WIDTH} />
        <ContactSection sectionClassName={SECTION_SPACING} containerClassName={CONTAINER_WIDTH} />
      </main>
      <Footer />
    </div>
  );
}
