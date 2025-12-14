import { motion } from "framer-motion";

export default function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
