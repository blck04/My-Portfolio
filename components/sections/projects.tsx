"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Web-based Password Manager",
    description:
      "A secure password management application that allows users to store, generate, and manage their passwords in one place with encryption and secure authentication.",
    image: "/images/password-manager.jpg",
    tags: ["Python", "HTML", "CSS", "Bootstrap"],
    liveUrl: "https://github.com/LeeTadiwarr/Safe-Pass",
    githubUrl: "https://github.com/LeeTadiwarr/Safe-Pass",
  },
  {
    id: 2,
    title: "Online Learning Platform",
    description:
      "An educational platform that provides courses, quizzes, and learning materials for students with progress tracking, interactive content, and video streaming capabilities.",
    image: "/images/online-learning.png",
    tags: ["HTML", "CSS", "Bootstrap", "Python"],
    liveUrl: "https://github.com/LeeTadiwarr/Edu-Learn",
    githubUrl: "https://github.com/LeeTadiwarr/Edu-Learn",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing skills, projects, and professional experience with smooth animations and interactive elements.",
    image: "/images/portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://github.com/blck04/portfolioV0",
    githubUrl: "https://github.com/blck04/portfolioV0",
  },
  {
    id: 4,
    title: "Student Accommodation Web App",
    description:
      "A comprehensive platform for students to find, book, and manage accommodation. Features include property listings, virtual tours, booking system, and tenant management with real-time communication.",
    image: "/images/student-accommodation.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://github.com/blck04/ACCOMODATION-PROJECT",
    githubUrl: "https://github.com/blck04/ACCOMODATION-PROJECT",
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-formula-condensed"
          >
            MY <span className="neon-text text-neon-primary">PROJECTS</span>
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
            A selection of my recent work, showcasing my skills in web development, UI/UX design, and interactive
            experiences across various domains.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-effect rounded-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neon-primary rounded-full text-black hover:bg-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neon-primary rounded-full text-black hover:bg-white transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold font-formula-condensed mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 font-neue-haas">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-neon-primary/20 text-neon-primary hover:bg-neon-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neon-primary hover:text-white transition-colors duration-300 font-formula-condensed"
                >
                  View Project <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-transparent border border-neon-primary text-neon-primary hover:bg-neon-primary/10 font-formula-condensed">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
