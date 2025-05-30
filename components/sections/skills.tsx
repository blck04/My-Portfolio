"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, PenTool, Terminal } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8" />,
    items: [
      { name: "JavaScript", level: 64 },
      { name: "React.js", level: 60 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "UI/UX",
    icon: <PenTool className="h-8 w-8" />,
    items: [
      { name: "Responsive Design", level: 90 },
      { name: "User Testing", level: 80 },
      { name: "Wireframing", level: 75 },
      { name: "UI Prototyping", level: 70 },
      { name: "Accessibility", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: <Database className="h-8 w-8" />,
    items: [
      { name: "Node.js", level: 25 },
      { name: "MongoDB", level: 23 },
      { name: "SQL", level: 65 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 15 },
    ],
  },
  {
    category: "Tools",
    icon: <Terminal className="h-8 w-8" />,
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Agile/Scrum", level: 75 },
      { name: "Version Control", level: 85 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-formula-condensed"
          >
            MY <span className="neon-text text-neon-primary">SKILLS</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-neon-primary rounded-full mx-auto mt-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 font-neue-haas"
          >
            A comprehensive overview of my technical skills and proficiency levels across various technologies and
            tools.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div key={skillGroup.category} variants={itemVariants} className="glass-effect rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-neon-primary/20 text-neon-primary mr-4">{skillGroup.icon}</div>
                <h3 className="text-2xl font-bold font-formula-condensed">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-formula-condensed">{skill.name}</span>
                      <span className="text-neon-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        className="h-full bg-neon-primary rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
