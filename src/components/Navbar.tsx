import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-semibold text-slate-100">DevOps<span className="text-accent">.</span></Link>
      <div className="hidden md:flex items-center gap-6">
        <Link to="#about" className="text-slate-300 hover:text-white">About</Link>
        <Link to="#projects" className="text-slate-300 hover:text-white">Projects</Link>
        <Link to="/resume" className="text-slate-300 hover:text-white">Resume</Link>
        <ThemeToggle />
      </div>
      <div className="md:hidden">
        <Menu className="text-slate-300" />
      </div>
    </nav>
  )
}

export default Navbar
