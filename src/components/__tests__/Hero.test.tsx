import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders name and CTA links', () => {
    render(<Hero />)
    expect(screen.getByText(/Katkojwal Krishna/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })
})
