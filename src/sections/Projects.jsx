import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const projects = [
  {
    title: "Kotak Internal Tools",
    desc: "Worked on cheque management, bug fixes, and unit testing for internal banking applications.",
    points: [
      "Enhanced UI screens and fixed production bugs.",
      "Integrated APIs and handled transaction-related modules.",
      "Wrote unit test cases using Jest and React Testing Library.",
    ],
    link: "#",
  },
    {
    title: "Gokarna Pooja Information Website",
    desc: "A user-friendly informational website to explore pooja details, benefits, and contact information related to Gokarna.",
    points: [
      "Designed and developed a clean, simple UI for easy navigation.",
      "Fully responsive across mobile, tablet, and desktop devices.",
      "Focused on fast loading performance and smooth UX.",
      "Built using reusable React components and Tailwind CSS.",
      "Optimized for performance and basic accessibility.",
    ],
    link: "https://gokarnapoojas.in",
  },
  {
    title: "Expense Tracker",
    desc: "A modern full-stack application with charts, filters, and authentication.",
    points: [
      "Implemented income and expense tracking with category filters.",
      "Visualized data using charts for better insights.",
      "Built scalable components with clean state management.",
    ],
    link: "#",
  },
  {
    title: "Personal Portfolio",
    desc: "A modern animated portfolio built using React, Tailwind, and Framer Motion.",
    points: [
      "One-page scrolling layout with smooth animations.",
      "Reusable components and clean folder structure.",
      "Responsive design with modern gradient UI.",
    ],
    link: "#",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-12 
        bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6 }}
              className="p-6 rounded-2xl relative overflow-hidden text-left
              bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
              from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition"></div>

              <h3 className="text-2xl font-semibold text-white mb-2 relative z-10">
                {p.title}
              </h3>

              <p className="text-gray-300 mb-4 relative z-10">
                {p.desc}
              </p>

              {/* Bullet points */}
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 relative z-10">
                {p.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Link */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-accent font-semibold hover:underline relative z-10"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
