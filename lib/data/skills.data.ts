import { 
  PenTool
} from "lucide-react";
import { SiNotion,
        SiTrello,
        SiJira,
        SiReact,
        SiNextdotjs,
        SiShadcnui,
        SiTailwindcss,
        SiBootstrap,
        SiLaravel,
        SiNodedotjs,
        SiPython,
        SiTypescript,
        SiGit,
        SiFigma,
        SiVercel,
        SiJavascript
      } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export type SkillItem = {
  name: string;
  icon: React.ElementType;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Product Management",
    skills: [
      { name: "Figjam", icon: PenTool },
      { name: "Notion", icon: SiNotion },
      { name: "Trello", icon: SiTrello },
      { name: "Jira", icon: SiJira },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel}
    ],
  },
];
