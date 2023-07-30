import { render, screen, fireEvent } from '@testing-library/react'
import Admin from './Admin'

test('check if the page loads', async () => {
  render(<Admin />)
  const title = screen.getByText(/admin/i)
  expect(title).toBeInTheDocument()
})
