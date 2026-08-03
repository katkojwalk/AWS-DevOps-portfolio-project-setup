import React from 'react'
import { motion } from 'framer-motion'

type Skill = { name: string; level: number }
export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-slate-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded h-3 mt-2 overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} className="h-3 bg-gradient-to-r from-blue-500 to-cyan-400" />
      </div>
    </div>
  )
}
