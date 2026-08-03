import React from 'react'

const Footer: React.FC = () => (
  <footer className="py-6">
    <div className="container mx-auto text-center text-slate-400">© {new Date().getFullYear()} DevOps Engineer. Built with React, Vite, and Tailwind.</div>
  </footer>
)

export default Footer
