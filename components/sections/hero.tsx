"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-primary/5"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-formula-condensed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="absolute left-0 right-0"
                  style={{
                    top: `${-20 + index * 10}px`,
                    opacity: index === 2 ? 1 : 0.3,
                    zIndex: 3 - index,
                  }}
                >
                  <span>ASHER </span>
                  <span className="neon-text text-neon-primary">BONDO</span>
                </div>
              ))}
              <div className="invisible">
                <span>ASHER </span>
                <span className="neon-text text-neon-primary">BONDO</span>
              </div>
            </div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-neue-haas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Developer building beautiful, interactive experiences with modern web technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-neon-primary text-black hover:bg-neon-primary/80 font-formula-condensed text-lg"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-neon-primary text-neon-primary hover:bg-neon-primary/10 font-formula-condensed text-lg"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <ArrowDown className="text-neon-primary w-8 h-8" />
      </motion.div>
    </section>
  )
}
