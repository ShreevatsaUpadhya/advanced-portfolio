import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-gradient-to-br from-primary/30 to-secondary/30
        p-10 rounded-3xl shadow-lg backdrop-blur-xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h2>

        <p className="text-gray-200 text-center mb-6">
          Feel free to reach out for freelance work, opportunities, or just a chat.
        </p>

        <div className="text-center">
          <a
            href="mailto:shreevatsa@example.com"
            className="inline-block px-8 py-3 bg-primary text-white rounded-xl
            font-semibold hover:bg-primary/80 transition"
          >
            Send Email
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
