import { Card, Section } from '@ui/index'

/**
 * Props for the About component
 */
export interface AboutProps {
  /** No props currently defined */
}

/**
 * About page component displaying information about the app
 *
 * @param _props - Component props (currently empty)
 * @returns The about page JSX element
 *
 * @example
 * ```tsx
 * <About />
 * ```
 */
export function About(_props: AboutProps) {
  return (
    <Section>
      <Card title="About This App" titleLevel="h3">
        <p>This is a comprehensive demonstration of modern web development practices using Preact, TypeScript, and a robust design system.</p>

        <h4>Architecture Highlights:</h4>
        <ul>
          <li><strong>Component-Driven:</strong> Modular UI components with TypeScript interfaces</li>
          <li><strong>State Management:</strong> Zustand for lightweight, reactive state</li>
          <li><strong>Styling:</strong> SCSS with design tokens and utility classes</li>
          <li><strong>Testing:</strong> Unit tests for all components and hooks</li>
          <li><strong>Build System:</strong> Vite with optimized production builds</li>
          <li><strong>Type Safety:</strong> Full TypeScript coverage with strict mode</li>
        </ul>

        <h4>Performance Features:</h4>
        <ul>
          <li>Tree-shaking for minimal bundle size</li>
          <li>Lazy loading and code splitting ready</li>
          <li>Optimized CSS with design system variables</li>
          <li>Modern ES modules with Vite HMR</li>
        </ul>
      </Card>
    </Section>
  )
}