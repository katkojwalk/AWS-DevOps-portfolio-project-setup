import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: any) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass p-4 rounded-lg">
      <div className="flex gap-4">
        <img src={project.image} alt="screenshot" className="w-28 h-20 rounded-md object-cover bg-slate-800" />
        <div>
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-slate-300 text-sm mt-1">{project.description}</p>
          <div className="mt-3 flex gap-2">
            {project.tags.map((t:string)=> <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800">{t}</span>)}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
