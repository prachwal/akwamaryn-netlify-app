import { Card, Section } from '@ui/index'
import { Container, Row, Column, Stack, Divider } from '@ui/layout'

/**
 * Props for the About component
 */
export interface AboutProps {
  /** No props currently defined */
}

/**
 * About page component displaying information about the app using new layout components
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
    <Container maxWidth="lg" padding="lg">
      <Stack spacing="xl" align="center">
        <Section>
          <Card title="About This App" titleLevel="h2">
            <p>This is a comprehensive demonstration of modern web development practices using Preact, TypeScript, and a robust design system.</p>
          </Card>
        </Section>

        <Row gap="lg" wrap={true}>
          <Column span={6} sm={6} xs={6}>
            <Card title="Architecture Highlights" titleLevel="h3">
              <Stack spacing="md">
                <div>
                  <strong>Component-Driven:</strong> Modular UI components with TypeScript interfaces
                </div>
                <div>
                  <strong>State Management:</strong> Zustand for lightweight, reactive state
                </div>
                <div>
                  <strong>Styling:</strong> SCSS with design tokens and utility classes
                </div>
                <div>
                  <strong>Testing:</strong> Unit tests for all components and hooks
                </div>
                <div>
                  <strong>Build System:</strong> Vite with optimized production builds
                </div>
                <div>
                  <strong>Type Safety:</strong> Full TypeScript coverage with strict mode
                </div>
              </Stack>
            </Card>
          </Column>

          <Column span={6} sm={6} xs={6}>
            <Card title="Performance Features" titleLevel="h3">
              <Stack spacing="md">
                <div>
                  <strong>Tree-shaking:</strong> Minimal bundle size optimization
                </div>
                <div>
                  <strong>Lazy Loading:</strong> Code splitting ready for better performance
                </div>
                <div>
                  <strong>Optimized CSS:</strong> Design system variables and utilities
                </div>
                <div>
                  <strong>Modern ES Modules:</strong> Vite HMR for fast development
                </div>
              </Stack>
            </Card>
          </Column>
        </Row>

        <Divider variant="solid" thickness="medium" color="muted" />

        <Section>
          <Card title="Layout System Demo" titleLevel="h3">
            <p>This page demonstrates the new layout components:</p>
            <ul>
              <li><strong>Container:</strong> Responsive max-width wrapper</li>
              <li><strong>Grid:</strong> 12-column responsive grid system</li>
              <li><strong>Column:</strong> Responsive column spans with breakpoints</li>
              <li><strong>Stack:</strong> Vertical spacing with alignment options</li>
              <li><strong>Divider:</strong> Visual separators between sections</li>
            </ul>
          </Card>
        </Section>
      </Stack>
    </Container>
  )
}