import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";


export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 pt-28"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-400 mb-3"
        >
          Hello, I'm
        </motion.h3>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-purple-400"
        >
          Mohamed Hafil
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl mt-4 text-gray-300"
        >
          Software Developer
        </motion.h2>

        {/* Short Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          I design and build efficient, scalable, and user‑friendly applications with modern technologies. I focus on problem‑solving, clean architecture, and delivering reliable software.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium"
          >
            Contact
          </a>
          
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-8 mt-12"
        >
          <a href="https://github.com/mdhaafil" target="_blank" className="hover:text-purple-400">
            <Github size={34} />
          </a>
          <a href="https://linkedin.com/in/mdhafil27" target="_blank" className="hover:text-purple-400">
            <Linkedin size={34} />
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-16 animate-bounce text-gray-400"
        >
          <ArrowDown size={40} />
        </motion.div>
      </div>
    </section>
  );
}
