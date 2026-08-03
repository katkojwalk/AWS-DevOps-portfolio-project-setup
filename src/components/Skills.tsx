import React from 'react'
import SkillBar from './SkillBar'
import { skills } from '../data/skills'

const Skills: React.FC = () => {
  return (
    <section className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {skills.map((s) => (
            <SkillBar key={s.name} skill={s} />
          ))}
        </div>
        <div className="p-4">
          <p className="text-slate-300">Technical skills across cloud, orchestration, CI/CD, monitoring, and scripting. Progress bars show relative proficiency for visual emphasis.</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
