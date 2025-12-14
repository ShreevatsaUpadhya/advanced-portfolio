import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data/skills";

// Import icons (ONLY valid ones)
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiGithubactions,
  SiReact,
} from "react-icons/si";

// Icon mapping
const iconMap = {
  react: <FaReact size={28} />,
  javascript: <FaJs size={28} />,
  tailwind: <SiTailwindcss size={28} />,
  framer: <SiFramer size={28} />,
  node: <FaNodeJs size={28} />,
  "react-native": <SiReact size={28} />,
  mongodb: <SiMongodb size={28} />,
  java: <FaJava size={28} />,
  git: <FaGitAlt size={28} />,
  docker: <FaDocker size={28} />,
  cicd: <SiGithubactions size={28} />,
  zustand: <SiReact size={28} />, // ✅ fallback icon
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="py-6 rounded-xl text-lg font-semibold text-white 
              bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-md 
              shadow-lg shadow-black/20 flex flex-col items-center gap-2"
            >
              {/* Icon (safe fallback added) */}
              <div>
                {iconMap[skill.icon] ?? <span className="text-xl">⚙️</span>}
              </div>

              {/* Skill Name */}
              <div>{skill.name}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
