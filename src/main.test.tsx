import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock the counter store
vi.mock('@stores/counterStore', () => ({
  useCounterStore: vi.fn(() => ({
    count: 0,
    increment: vi.fn(),
  })),
}))

describe('main.tsx', () => {
  beforeEach(() => {
    // Clear document.body before each test
    document.body.innerHTML = ''
  })

  it('should render App component to document.body', async () => {
    // Import main.tsx which executes the render
    await import('./main')

    // Check if App is rendered (Counter component should be present)
    expect(document.body.innerHTML).toContain('count is 0')
    expect(document.body.innerHTML).toContain('<button')
  })
})