import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8">
      <div className="absolute inset-0 -z-10 opacity-40 bg-gradient-to-br from-blue-900 via-cyan-800 to-transparent blur-xl"></div>
      <div className="glass rounded-xl p-8 md:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl font-bold">Katkojwal Krishna — DevOps Engineer</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Designing reliable infrastructure, building CI/CD pipelines, and automating cloud operations to ship software faster.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-4 py-2 rounded-md bg-primary text-black font-medium">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-slate-600 text-slate-200">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
