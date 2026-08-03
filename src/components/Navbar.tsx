import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Link to="/" className="text-xl font-semibold text-slate-100">DevOps<span className="text-accent">.</span></Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-slate-300 hover:text-white">About</a>
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <Link to="/resume" className="text-slate-300 hover:text-white">Resume</Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 rounded-md glass">
            {open ? <X className="text-slate-100" /> : <Menu className="text-slate-100" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-slate-900/80 p-4 space-y-3">
          <a href="#about" className="block text-slate-200">About</a>
          <a href="#projects" className="block text-slate-200">Projects</a>
          <Link to="/resume" className="block text-slate-200">Resume</Link>
          <ThemeToggle />
        </div>
      )}
    </>
  )
}

export default Navbar
