
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const projects = [
  {
    title: "Kotak Internal Tools",
    desc: "Worked on cheque management,Credit card functionalities, account modules, bug fixes, and unit testing for internal banking applications.",
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
    link: "https://github.com/ShreevatsaUpadhya/expense-tracker",
  },
  {
    title: "Personal Portfolio",
    desc: "A modern animated portfolio built using React, Tailwind, and Framer Motion.",
    points: [
      "One-page scrolling layout with smooth animations.",
      "Reusable components and clean folder structure.",
      "Responsive design with modern gradient UI.",
    ],
    link: "https://github.com/ShreevatsaUpadhya/advanced-portfolio",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading – consistent with other sections */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group p-6 rounded-2xl relative overflow-hidden text-left
              bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg"
            >
              {/* Hover Glow (consistent pattern) */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br
                from-primary/20 to-secondary/20 opacity-0
                group-hover:opacity-100 transition duration-300"
              ></div>

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
                  className="inline-block text-primary font-semibold hover:underline relative z-10"
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
