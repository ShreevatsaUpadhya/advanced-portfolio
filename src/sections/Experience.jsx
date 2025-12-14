// import SectionWrapper from "../components/SectionWrapper";

// export default function Experience() {
//   return (
//     <SectionWrapper id="experience">
//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 
//       bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
//         Experience
//       </h2>

//       <div className="max-w-3xl mx-auto space-y-10">
//         <div className="relative border-l-4 border-primary pl-6">
//           <h3 className="text-2xl font-bold text-white">Kotak Mahindra Bank</h3>
//           <p className="text-accent font-semibold">Full Stack Developer (2.10 years)</p>
//           <p className="text-gray-300 mt-2">
//             Worked on ActiveMoney, Manage Cheque, Transaction Statement modules.
//             Implemented UI screens, bug fixes, API integration, and Jest test cases.
//           </p>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }
import SectionWrapper from "../components/SectionWrapper";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 
        bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Experience
        </h2>

        {experience.map((exp, i) => (
          <div
            key={i}
            className="relative bg-black/30 backdrop-blur-xl border border-white/10 
            rounded-2xl p-8 shadow-lg"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">
                {exp.company}
              </h3>
              <p className="text-accent font-semibold">
                {exp.role} • {exp.location}
              </p>
              <p className="text-gray-400 text-sm">
                {exp.duration}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {exp.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full 
                  bg-gradient-to-r from-primary/30 to-secondary/30 
                  text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
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
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Key Achievements
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </SectionWrapper>
  );
}
