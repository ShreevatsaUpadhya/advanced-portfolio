import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-16 bg-black/60 backdrop-blur-lg text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* ✅ LOGO (replaces name) */}
        <a href="#hero" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Portfolio_logo.png`}
            alt="SU Logo"
            className="h-9 w-auto object-contain transition hover:scale-105"
          />
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <a
                href={`#${link.to}`}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/90 text-white flex flex-col gap-6 py-6 px-6">
          {links.map((link) => (
            <li key={link.to}>
              <a
                href={`#${link.to}`}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
