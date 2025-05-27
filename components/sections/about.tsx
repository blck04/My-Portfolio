"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const handleDownload = () => {
    // Create a direct link to the PDF file and force download
    window.open("/api/download", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden neon-border">
              <Image src="/images/profile.png" alt="Asher Bondo - Software Developer" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-formula-condensed">
              ABOUT <span className="neon-text text-neon-primary">ME</span>
            </h2>

            <div className="h-1 w-20 bg-neon-primary rounded-full"></div>

            <p className="text-lg text-gray-300 font-neue-haas">
              Motivated and adaptable Computer Science undergraduate with hands-on experience in software development
              and a strong foundation in IT principles. Skilled in troubleshooting, web technologies, and collaborative
              team environments.
            </p>

            <p className="text-lg text-gray-300 font-neue-haas">
              I'm passionate about creating immersive, user-centric web experiences with expertise in React, JavaScript,
              and modern CSS frameworks. I bring designs to life with clean code and smooth animations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-neon-primary font-formula-condensed text-xl">Education</h3>
                <p className="text-gray-300 font-neue-haas">B.A.Sc. Computer Science</p>
                <p className="text-gray-400 font-neue-haas">National University of Science and Technology</p>
              </div>
              <div>
                <h3 className="text-neon-primary font-formula-condensed text-xl">Location</h3>
                <p className="text-gray-300 font-neue-haas">Chitungwiza, Zimbabwe</p>
                <p className="text-gray-400 font-neue-haas">Available for remote work</p>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="mt-6 bg-transparent border border-neon-primary text-neon-primary hover:bg-neon-primary/10 font-formula-condensed"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
