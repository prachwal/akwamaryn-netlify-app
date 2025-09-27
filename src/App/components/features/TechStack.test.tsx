import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'

import { TechStack } from './TechStack'

describe('TechStack', () => {
  it('renders Preact version correctly', () => {
    render(<TechStack version="preact" />)
    expect(screen.getByText(__PREACT_VERSION__)).toBeInTheDocument()
  })

  it('renders TypeScript version correctly', () => {
    render(<TechStack version="typescript" />)
    expect(screen.getByText(__TYPESCRIPT_VERSION__)).toBeInTheDocument()
  })

  it('renders Vite version correctly', () => {
    render(<TechStack version="vite" />)
    expect(screen.getByText(__VITE_VERSION__)).toBeInTheDocument()
  })

  it('renders SCSS version correctly', () => {
    render(<TechStack version="scss" />)
    expect(screen.getByText(__SCSS_VERSION__)).toBeInTheDocument()
  })

  it('renders Vitest version correctly', () => {
    render(<TechStack version="vitest" />)
    expect(screen.getByText(__VITEST_VERSION__)).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<TechStack version="preact" className="custom-class" />)
    const span = screen.getByText(__PREACT_VERSION__)
    expect(span).toHaveClass('custom-class')
  })

  it('renders with label', () => {
    render(<TechStack version="preact" label="Preact:" />)
    expect(screen.getByText(`Preact: ${__PREACT_VERSION__}`)).toBeInTheDocument()
  })

  it('renders with label and className', () => {
    render(<TechStack version="typescript" label="TypeScript:" className="version-info" />)
    const span = screen.getByText(`TypeScript: ${__TYPESCRIPT_VERSION__}`)
    expect(span).toHaveClass('version-info')
  })

  it('renders as span element', () => {
    render(<TechStack version="vite" />)
    const element = screen.getByText(__VITE_VERSION__)
    expect(element.tagName).toBe('SPAN')
  })
})