import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

// Skill groups
const skillGroups = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "React Native", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Java", "Spring Boot", "Node.js"],
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "SQL", "AWS", "Docker"],
  },
  {
    title: "Testing & Tools",
    skills: ["Jest", "Git", "CI/CD", "Agile"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          Proficient in modern technologies and frameworks for building
          scalable, high-performance applications.
        </p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 rounded-2xl
              bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg
              overflow-hidden"
            >
              {/* Hover Glow (same as Projects) */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br
                from-primary/20 to-secondary/20 opacity-0
                group-hover:opacity-100 transition duration-300"
              ></div>

              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full text-sm
                    bg-white/10 text-gray-300
                    hover:bg-primary/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
