import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])
  return (
    <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-md glass">
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export default ThemeToggle
