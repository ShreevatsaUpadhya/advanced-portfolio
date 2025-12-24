import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "8+", label: "Modules Delivered" },
  ];

  const education = [
    {
      degree: "Master Of Computer Application",
      institution: "Bangalore Institute of Technology (VTU)",
      duration: "2020 – 2022",
      location: "Karnataka, India",
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          Frontend-focused software engineer with 3+ years of experience
          building responsive, scalable applications using React, JavaScript,
          and modern UI frameworks. Currently working in the fintech domain,
          contributing to production-grade banking applications with a strong
          focus on code quality, performance, and reliability. I’ve delivered
          multiple end-to-end projects for enterprise and international clients,
          handling UI architecture, reusable component design, and cross-device
          compatibility. I enjoy collaborating with stakeholders to convert
          business requirements into clean, maintainable frontend solutions.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl p-6 bg-black/30 backdrop-blur-xl
              border border-white/10 shadow-lg overflow-hidden"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br
                from-primary/20 to-secondary/20 opacity-0
                group-hover:opacity-100 transition duration-300"
              ></div>

              <h3 className="text-3xl font-bold text-primary relative z-10">
                {s.value}
              </h3>
              <p className="text-gray-400 mt-2 text-sm relative z-10">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="text-left">
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-2xl
                bg-black/30 backdrop-blur-xl border border-white/10
                shadow-lg overflow-hidden"
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br
                  from-primary/20 to-secondary/20 opacity-0
                  group-hover:opacity-100 transition duration-300"
                ></div>

                <h4 className="text-xl font-semibold text-white relative z-10">
                  {edu.degree}
                </h4>

                <p className="text-primary font-medium relative z-10">
                  {edu.institution}
                </p>

                <p className="text-gray-400 text-sm mt-1 relative z-10">
                  {edu.duration} • {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
