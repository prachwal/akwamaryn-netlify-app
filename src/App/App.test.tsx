import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/preact'
import userEvent from '@testing-library/user-event'

import { App } from './App'

// Mock the counter store
const incrementMock = vi.fn()
vi.mock('@stores/counterStore', () => ({
  useCounterStore: () => ({
    count: 0,
    increment: incrementMock,
  }),
}))

// Mock the version
;(globalThis as unknown as { __APP_VERSION__: string }).__APP_VERSION__ = '0.0.1'

describe('App', () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByText('Akwamaryn')).toBeTruthy()
  })

  it('increments count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })

    await user.click(button)

    expect(incrementMock).toHaveBeenCalled()
  })

  it('displays version', () => {
    render(<App />)
    expect(screen.getByText(/0\.0\.1/)).toBeTruthy()
  })

  it('toggles hamburger menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    // Initially hamburger should say "Open menu"
    const hamburgerOpen = screen.getByRole('button', { name: /open menu/i })
    expect(hamburgerOpen).toBeInTheDocument()
    
    // Click to open
    await user.click(hamburgerOpen)
    
    // Now it should say "Close menu"  
    const hamburgerClose = screen.getByRole('button', { name: /close menu/i })
    expect(hamburgerClose).toBeInTheDocument()
    
    // Click to close
    await user.click(hamburgerClose)
    
    // Back to "Open menu"
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})