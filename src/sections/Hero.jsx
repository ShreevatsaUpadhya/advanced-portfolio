import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaCloud,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6
  pt-24 md:pt-0
  bg-gradient-to-br from-black via-[#0B1220] to-[#020617] overflow-hidden"
    >
      {/* Floating Icons */}
      <FloatingIcon
        icon={<FaReact />}
        className="top-[20%] left-[15%]"
        delay={0}
      />
      <FloatingIcon
        icon={<FaJsSquare />}
        className="top-[30%] right-[20%]"
        delay={1}
      />
      <FloatingIcon
        icon={<FaCloud />}
        className="bottom-[25%] left-[25%]"
        delay={2}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* Avatar */}
        <div className="relative mx-auto w-40 h-40 mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl"></div>
          <img
            src={`${process.env.PUBLIC_URL}/avatar.png` }
            alt="Profile"
            className="relative z-10 rounded-full border-4 border-blue-500"
          />
        </div>

        <p className="text-blue-400 uppercase tracking-widest text-sm">
          Software Engineer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Shreevatsa <span className="text-blue-500">Upadhya</span>
        </h1>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Frontend-focused developer building scalable and high-performance web
          applications.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href={`${process.env.PUBLIC_URL}/resume/Shreevatsa-Upadhya-Resume.pdf`}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white"
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a
            href="http://linkedin.com/in/shreevatsa-upadhya-89b429217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/ShreevatsaUpadhya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:shreevatsa329@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* 🔹 Floating Icon Component */
function FloatingIcon({ icon, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute ${className} text-blue-400 text-4xl`}
    >
      <div className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
        {icon}
      </div>
    </motion.div>
  );
}
