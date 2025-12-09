
import { motion } from "framer-motion";
import My1 from "../assets/my1.png"

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center min-h-screen px-6 text-white bg-black md:px-20 py-28"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-4xl font-bold text-purple-400 md:text-5xl"
      >
        About Me
      </motion.h2>

      {/* Main Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-5xl w-full bg-[#0d0d0d] 
          rounded-3xl p-10 md:p-14 
          border border-purple-600/30 
          shadow-[0_0_15px_rgba(128,0,255,0.3)]
          flex flex-col md:flex-row items-center gap-12
        "
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            w-48 h-48 md:w-60 md:h-60 
            rounded-2xl 
            border border-purple-500/40 
            shadow-[0_0_20px_rgba(128,0,255,0.25)]
            overflow-hidden
          "
        >
          <img
            src={My1}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-lg font-medium text-purple-300"
          >
            Software Developer • MERN Stack • UI Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 leading-8 text-gray-300"
          >
            I’m{" "}
            <span className="font-semibold text-purple-400">Mohammed Haafil</span>,
            a passionate Software Developer who specializes in building 
            modern web applications using the MERN stack. I enjoy turning ideas 
            into clean, efficient, and fully functional digital products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="leading-8 text-gray-300"
          >
            My strengths include crafting responsive interfaces, writing scalable 
            code, and understanding how to create smooth and meaningful user 
            experiences. I always focus on clean structure, performance, and 
            problem-solving—core skills of a modern software developer.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
