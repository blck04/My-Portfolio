"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-formula-condensed"
          >
            GET IN <span className="neon-text text-neon-primary">TOUCH</span>
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
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Fill out the
            form below or reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-formula-condensed mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-neon-primary/20 text-neon-primary mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-formula-condensed text-lg">Email</h4>
                  <a
                    href="mailto:bondoasher@gmail.com"
                    className="text-gray-300 hover:text-neon-primary transition-colors font-neue-haas"
                  >
                    bondoasher@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-neon-primary/20 text-neon-primary mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-formula-condensed text-lg">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/asherbondo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-neon-primary transition-colors font-neue-haas"
                  >
                    linkedin.com/in/asherbondo
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-neon-primary/20 text-neon-primary mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-formula-condensed text-lg">Location</h4>
                  <p className="text-gray-300 font-neue-haas">
                    Chitungwiza, Zimbabwe
                    <br />
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold font-formula-condensed mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/blck04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-neon-primary/20 text-neon-primary hover:bg-neon-primary/40 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/asherbondo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-neon-primary/20 text-neon-primary hover:bg-neon-primary/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-lg p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-primary/20 text-neon-primary mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-formula-condensed mb-4">Message Sent!</h3>
                <p className="text-gray-300 mb-6 font-neue-haas">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-neon-primary text-black hover:bg-neon-primary/80 font-formula-condensed"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-formula-condensed">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      required
                      className="bg-black/50 border-gray-700 focus:border-neon-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-formula-condensed">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-black/50 border-gray-700 focus:border-neon-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-formula-condensed">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                    className="bg-black/50 border-gray-700 focus:border-neon-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-formula-condensed">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-black/50 border-gray-700 focus:border-neon-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-primary text-black hover:bg-neon-primary/80 font-formula-condensed text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
