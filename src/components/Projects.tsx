import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const tags = ['All', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker', 'Monitoring', 'AWS', 'HA']

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))
  return (
    <section id="projects" className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(t => (
          <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1 rounded ${filter===t? 'bg-primary text-black' : 'bg-slate-800 text-slate-300'}`}>{t}</button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}

export default Projects
