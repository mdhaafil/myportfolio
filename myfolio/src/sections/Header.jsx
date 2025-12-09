import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Education", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#0a0a0a]/90 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-400"
        >
         Mohamed Hafil
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-white">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.15, color: "#c084fc" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer text-lg font-medium"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl shadow-xl"
          >
            <ul className="flex flex-col py-5 space-y-5 text-center text-lg text-white">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1, color: "#c084fc" }}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
