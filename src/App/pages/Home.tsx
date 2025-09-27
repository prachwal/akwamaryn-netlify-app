import { Card, Section } from '@ui/index'
import { Counter } from '@components/features/Counter'

import { GeolocationDisplay } from '@/App/components/GeolocationDisplay'

/**
 * Props for the Home component
 */
export interface HomeProps {
  /** No props currently defined */
}

/**
 * Home page component displaying the main content
 *
 * @param _props - Component props (currently empty)
 * @returns The home page JSX element
 *
 * @example
 * ```tsx
 * <Home />
 * ```
 */
export function Home(_props: HomeProps) {
  return (
    <>
      <Section>
        <Card title="Interactive Counter" titleLevel="h3">
          <Counter />
          <p>
            This counter demonstrates Zustand state management.
            Edit <code>src/App/App.tsx</code> and save to test HMR.
          </p>
        </Card>
      </Section>

      <Section>
        <GeolocationDisplay title="Your Location" titleLevel="h3" />
      </Section>
    </>
  )
}