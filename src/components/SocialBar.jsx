import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialBar() {
  const icons = [
    { icon: <FaGithub />, link: "https://github.com/ShreevatsaUpadhya" },
    { icon: <FaLinkedin />, link: "http://linkedin.com/in/shreevatsa-upadhya-89b429217" },
    { icon: <FaEnvelope />, link: "mailto:shreevatsa329@example.com" },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-6">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            whileHover={{ scale: 1.2, x: 4 }}
            className="text-white text-2xl bg-gradient-to-br from-primary/40 to-secondary/40 
              p-3 rounded-2xl backdrop-blur-md shadow-lg"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
