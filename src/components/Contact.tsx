import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 flex flex-col gap-3 text-slate-300">
        <a href="mailto:you@example.com" className="flex items-center gap-2"><Mail /> you@example.com</a>
        <a href="#" className="flex items-center gap-2"><Linkedin /> LinkedIn</a>
        <a href="#" className="flex items-center gap-2"><Github /> GitHub</a>
        <a href="/resume.pdf" className="mt-2 inline-block px-4 py-2 bg-primary text-black rounded">Download Resume</a>
      </div>
    </section>
  )
}

export default Contact
