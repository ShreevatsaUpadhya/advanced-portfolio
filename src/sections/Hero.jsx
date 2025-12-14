import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white
      bg-gradient-to-br from-black via-gray-900 to-blue-900"
    >

      {/* Floating Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-72 h-72 bg-primary/40 blur-3xl rounded-full -top-10 -left-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.5, scale: 1.3 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-72 h-72 bg-secondary/40 blur-3xl rounded-full bottom-10 right-10"
      />

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Shreevatsa
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300">
          Full Stack Developer • React • Node • MongoDB • Java • DevOps
        </p>

        <a
          href="#projects"
          className="mt-10 inline-block bg-gradient-to-r from-primary to-secondary px-8 py-3
          rounded-xl text-lg font-semibold hover:opacity-90 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
