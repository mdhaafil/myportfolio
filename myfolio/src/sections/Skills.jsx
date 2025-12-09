import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiPython, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
    { name: "React", icon: <SiReact size={40} className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-blue-400" /> },
    { name: "Python", icon: <SiPython size={40} className="text-yellow-600" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#050505] text-white flex flex-col items-center px-6 pt-32 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-purple-400 mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400 transition cursor-pointer"
          >
            {skill.icon}
            <p className="text-gray-300 font-medium mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
