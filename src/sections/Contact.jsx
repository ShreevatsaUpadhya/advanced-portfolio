import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s connect and discuss how we can work together.
        </p>

        {/* Contact Cards */}
        <div className="space-y-4 mb-12">
          <ContactCard icon={<FaEnvelope />} text="shreevatsa329@gmail.com" />
          <ContactCard icon={<FaPhone />} text="+91 9741412949" />
          <ContactCard icon={<FaLinkedin />} text="shreevatsa-upadhya" />
          <ContactCard icon={<FaMapMarkerAlt />} text="Bangalore, India" />
        </div>

        {/* Ready to Collaborate */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="group relative p-8 rounded-2xl
          bg-black/30 backdrop-blur-xl border border-white/10
          shadow-lg overflow-hidden"
        >
          {/* Hover Glow */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br
            from-primary/20 to-secondary/20 opacity-0
            group-hover:opacity-100 transition duration-300"
          ></div>

          <h3 className="text-xl font-semibold text-white mb-2 relative z-10">
            Ready to collaborate?
          </h3>

          <p className="text-gray-400 mb-6 relative z-10">
            I’m open to opportunities and exciting projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">

            <a
              href="mailto:shreevatsa329@gmail.com"
              className="flex items-center justify-center gap-2
              px-6 py-3 bg-primary rounded-xl text-white
              hover:bg-primary/80 transition transform hover:scale-105"
            >
              <FaEnvelope />
              Send Email
            </a>

            <a
              href="/resume/Shreevatsa-Upadhya-Resume.pdf"
              className="flex items-center justify-center gap-2
              px-6 py-3 border border-white/20 rounded-xl text-white
              hover:bg-white/10 transition transform hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}

function ContactCard({ icon, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-4 p-4 rounded-xl
      bg-black/30 backdrop-blur-xl border border-white/10
      hover:border-primary/40 transition"
    >
      <div className="text-primary text-lg">{icon}</div>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
}
