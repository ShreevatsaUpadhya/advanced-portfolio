import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-black/30 backdrop-blur-xl 
              border border-white/10 rounded-2xl p-8 shadow-lg overflow-hidden"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br
                from-primary/20 to-secondary/20 opacity-0
                group-hover:opacity-100 transition duration-300"
              ></div>

              {/* Header */}
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white">
                  {exp.company}
                </h3>
                <p className="text-primary font-semibold">
                  {exp.role} • {exp.location}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {exp.duration}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full
                    bg-white/10 text-gray-300
                    hover:bg-primary/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="mb-6 relative z-10">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Key Achievements
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
