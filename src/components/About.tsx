import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section id="about" className="glass p-6 rounded-xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 text-slate-300">Experienced DevOps Engineer focused on cloud-native infrastructure, automation, and reliability. Proven track record with AWS, Kubernetes, and CI/CD platforms.</p>
        <h3 className="mt-6 font-medium">Career Objective</h3>
        <p className="text-slate-300">To design scalable, secure, and observable systems and enable teams to deliver with confidence.</p>
        <h3 className="mt-6 font-medium">Timeline</h3>
        <ol className="mt-2 list-decimal list-inside text-slate-300">
          <li>2020 — Present: Senior DevOps Engineer</li>
          <li>2017 — 2020: Platform Engineer</li>
          <li>2015 — 2017: Systems Administrator</li>
        </ol>
      </motion.div>
    </section>
  )
}

export default About
