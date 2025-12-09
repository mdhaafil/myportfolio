import { motion } from "framer-motion";
import { Github, Linkedin, Mail, PhoneCall, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505]    ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
          {/* Brand Section */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-purple-400 mb-3"
            >
              Mohamed Hafil
            </motion.h1>
            <p className="text-gray-400 leading-relaxed">
              A passionate MERN Stack Developer crafting modern web experiences.
              I love building fast, beautiful, responsive applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl text-white font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Education", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, color: "#c084fc" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="cursor-pointer"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-xl text-white font-semibold mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-400" />
                <p>mohammedhaafil5@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="text-purple-400" />
                <p>+91 93422 71843</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-400" />
                <p>Erode, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-12 mb-6">
          {[{
            icon: Github,
            link: "https://github.com/mdhaafil"
          }, {
            icon: Linkedin,
            link: "https://linkedin.com/in/mdhafil27"
          }, {
            icon: Mail,
            link: "mailto:mohammedhaafil5@@gmail.com"
          }].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.25, color: "#c084fc" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-white"
            >
              <item.icon size={32} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-sm mt-4"
        >
          © {new Date().getFullYear()} Mohamed Hafil. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}
