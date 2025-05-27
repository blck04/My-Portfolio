import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-formula-condensed">
              <span className="neon-text text-neon-primary">ASHER</span>
              <span className="text-white">BONDO</span>
            </h2>
            <p className="text-gray-400 mt-2 font-neue-haas">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/blck04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/asherbondo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bondoasher@gmail.com"
              className="text-gray-400 hover:text-neon-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="font-neue-haas">Software Developer | React | JavaScript | HTML/CSS | Node.js</p>
        </div>
      </div>
    </footer>
  )
}
