import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Create resume content as a simple text response for now
    // In a real implementation, you would serve an actual PDF file
    const resumeContent = `
ASHER BONDO
SOFTWARE DEVELOPER
17605 NEW ZENGEZA 4, CHITUNGWIZA | bondoasher@gmail.com | www.linkedin.com/in/asherbondo

SUMMARY
Motivated and adaptable Computer Science undergraduate with hands-on experience in software development and a strong foundation in IT principles. Skilled in troubleshooting, web technologies, and collaborative team environments. Seeking an IT Intern position to apply academic knowledge, expand technical expertise, and contribute to real-world IT operations and support.

EXPERIENCE

Feb 2024 - Present | Web Development Projects – Collaborator
• Built web apps as part of multiple team projects
• Handled both front-end UI design and back-end API integration
• Used Git and GitHub for version control in collaborative workflows
• Participated in Agile development with task planning and code reviews

Feb 2024 - Present | Freelance Web Developer
• Designed, developed, and deployed front-end web applications with a focus on responsive design and user experience
• Diagnosed and resolved front-end and back-end issues to enhance application performance
• Wrote and optimized SQL queries and stored procedures for data management

EDUCATION

September 2023 - Present | Bachelor of Applied Science - BASc, Computer Science
National University of Science and Technology, Bulawayo
Relevant coursework in Object-Oriented Programming as well as Data Structures and Algorithms

PROJECTS
• Portfolio
• Web based password manager
• Online learning Platform

TECHNICAL SKILLS
• Javascript
• HTML5
• CSS
• Git version control
• Python
• IT
• Bootstrap
• Responsive Design
• User Testing

CERTIFICATIONS
• Responsive Web Design - FreeCodeCamp
    `

    // Return as a downloadable text file (you can replace this with actual PDF serving)
    return new NextResponse(resumeContent, {
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": 'attachment; filename="Asher-Bondo-Resume.txt"',
      },
    })
  } catch (error) {
    console.error("Error downloading file:", error)
    return new NextResponse("Error downloading file", { status: 500 })
  }
}
