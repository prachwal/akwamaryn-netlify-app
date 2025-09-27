import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import userEvent from '@testing-library/user-event'

import { App } from './components/App/App.tsx'

// Mock the version
;(global as any).__APP_VERSION__ = '0.0.1'

describe('App', () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByText('Akwamaryn Netlify App')).toBeTruthy()
  })

  it('increments count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })

    await user.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeTruthy()
  })

  it('displays version', () => {
    render(<App />)
    expect(screen.getByText('Version: 0.0.1')).toBeTruthy()
  })
})