import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header text', () => {
  render(<App />)
  const header = screen.getByText(/Tinder for movies/i)
  expect(header).toBeInTheDocument()
})
