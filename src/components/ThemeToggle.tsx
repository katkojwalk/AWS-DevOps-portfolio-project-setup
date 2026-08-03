import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const STORAGE_KEY = 'theme-preference'

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return saved === 'dark'
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={dark}
      onClick={() => setDark(!dark)}
      className="p-2 rounded-md glass"
    >
      {dark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

export default ThemeToggle
