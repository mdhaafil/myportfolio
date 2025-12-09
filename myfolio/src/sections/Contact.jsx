import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";


export default function Contact() {
  return (
    
    <><section id="contact" className="min-h-screen bg-[#050505] text-white flex flex-col items-center px-6 pt-32 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-4xl font-bold text-purple-400"
      >
        Contact Me
      </motion.h2>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#0d0d0d] border border-purple-500/20 text-white focus:outline-none focus:border-purple-400" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#0d0d0d] border border-purple-500/20 text-white focus:outline-none focus:border-purple-400" />
          <textarea placeholder="Your Message" rows={5} className="p-3 rounded-lg bg-[#0d0d0d] border border-purple-500/20 text-white focus:outline-none focus:border-purple-400"></textarea>
          <button type="submit" className="px-6 py-3 mt-2 font-medium bg-purple-600 hover:bg-purple-700 rounded-xl">Send Message</button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl font-semibold text-purple-400">Get in Touch</h3>
          <p className="text-center text-gray-400">You can reach me via email or connect with me on social platforms below.</p>

          <div className="flex gap-6 mt-4">
            <a href="https://github.com/mdhaafil" target="_blank" className="hover:text-purple-400">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/mdhafil27" target="_blank" className="hover:text-purple-400">
              <Linkedin size={32} />
            </a>
            <a href="mailto:mohammedhaafil5@gmail.com" className="hover:text-purple-400">
              <Mail size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    
    
      </>
    
  );
}