import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the PDF file
    const filePath = path.join(process.cwd(), "public", "files", "asher-bondo-resume.pdf")

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Asher-Bondo-Resume.pdf"',
      },
    })
  } catch (error) {
    console.error("Error downloading file:", error)
    return new NextResponse("Error downloading file", { status: 500 })
  }
}
