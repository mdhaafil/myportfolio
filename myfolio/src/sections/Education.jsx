// import { motion } from "framer-motion";

// export default function Education() {
//   const educationList = [
//     {
//       school: "Ekm Abdul Gani Matharasa Islamia High School, Erode",
//       degree: "High School",
//       year: "2016 - 2018",
//       description: "Completed high school with focus on science and foundational studies."
//     },
//     {
//       school: "Kamaraj Municipal Higher Secondary School, Erode",
//       degree: "Higher Secondary",
//       year: "2018 - 2020",
//       description: "Completed higher secondary education with specialization in computer science."
//     },
//     {
//       school: "Erode Arts and Science College, Erode",
//       degree: "Undergraduate Studies",
//       year: "2020 - Present",
//       description: "Pursuing undergraduate degree focusing on software development and modern web technologies."
//     }
//   ];

//   return (
//     <section id="education" className="min-h-screen bg-[#050505] text-white flex flex-col items-center px-6 pt-32 pb-20">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="mb-12 text-4xl font-bold text-purple-400"
//       >
//         Education
//       </motion.h2>

//       <div className="flex flex-col w-full max-w-4xl gap-10">
//         {educationList.map((edu, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="p-6 transition border border-purple-500/20 rounded-2xl hover:border-purple-400"
//           >
//             <h3 className="text-2xl font-semibold text-purple-400">{edu.school}</h3>
//             <p className="mt-1 font-medium text-gray-300">{edu.degree} | {edu.year}</p>
//             <p className="mt-2 leading-relaxed text-gray-400">{edu.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { MdSchool } from "react-icons/md";

export default function Education() {
  const educationList = [
    {
      school: "Ekm Abdul Gani Matharasa Islamia High School, Erode",
      degree: "High School",
      year: "2017 - 2021",
      description: "Completed high school with focus on science and foundational studies."
    },
    {
      school: "Kamaraj Municipal Higher Secondary School, Erode",
      degree: "Higher Secondary",
      year: "2021 - 2023",
      description: "Completed higher secondary education with specialization in computer science."
    },
    {
      school: "Erode Arts and Science College, Erode",
      degree: "Undergraduate Studies",
      year: "2023 - Present",
      description: "Pursuing undergraduate degree focusing on software development and modern web technologies."
    }
  ];

  return (
    <section id="education" className="min-h-screen bg-[#050505] text-white flex flex-col items-center px-6 pt-32 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-4xl font-bold text-purple-400"
      >
        Education
      </motion.h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical timeline line */}
        <div className="absolute top-0 w-1 h-full bg-purple-500 rounded left-5"></div>

        <div className="flex flex-col gap-10 ml-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative p-6 bg-[#0d0d0d] border border-purple-500/20 rounded-2xl shadow-lg hover:shadow-purple-400/50 transition"
            >
              {/* Timeline icon */}
              <div className="absolute p-2 text-white bg-purple-500 rounded-full -left-8 top-6">
                <MdSchool size={24} />
              </div>

              <h3 className="text-2xl font-semibold text-purple-400">{edu.school}</h3>
              <p className="mt-1 font-medium text-gray-300">{edu.degree} | {edu.year}</p>
              <p className="mt-2 leading-relaxed text-gray-400">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}