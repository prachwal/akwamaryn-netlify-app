import { Card, Section } from '@ui/index'
import { TechStack } from '@components/features/TechStack'

/**
 * Props for the Features component
 */
export interface FeaturesProps {
  /** No props currently defined */
}

/**
 * Features page component displaying key features
 *
 * @param _props - Component props (currently empty)
 * @returns The features page JSX element
 *
 * @example
 * ```tsx
 * <Features />
 * ```
 */
export function Features(_props: FeaturesProps) {
  return (
    <Section>
      <Card title="Key Features" titleLevel="h3">
        <div className="features-grid">
          <div className="feature-item">
            <h4>🎨 Design System</h4>
            <p>Consistent UI components with SCSS variables and responsive design.</p>
          </div>
          <div className="feature-item">
            <h4>📱 Mobile First</h4>
            <p>Responsive layout that adapts to different screen sizes and orientations.</p>
          </div>
          <div className="feature-item">
            <h4>🧪 Well Tested</h4>
            <p>Comprehensive test coverage with Vitest and Testing Library.</p>
          </div>
          <div className="feature-item">
            <h4>⚡ Fast Build</h4>
            <p>Vite for lightning-fast development and optimized production builds.</p>
          </div>
        </div>
      </Card>

      <Card title="Tech Stack" titleLevel="h3">
        <table className="tech-stack-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Version</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Preact</strong></td>
              <td><TechStack version="preact" className="version-badge" /></td>
              <td>Fast, lightweight React alternative</td>
            </tr>
            <tr>
              <td><strong>TypeScript</strong></td>
              <td><TechStack version="typescript" className="version-badge" /></td>
              <td>Type-safe JavaScript with static typing</td>
            </tr>
            <tr>
              <td><strong>Vite</strong></td>
              <td><TechStack version="vite" className="version-badge" /></td>
              <td>Next-generation frontend tooling</td>
            </tr>
            <tr>
              <td><strong>SCSS</strong></td>
              <td><TechStack version="scss" className="version-badge" /></td>
              <td>Enhanced CSS with variables and mixins</td>
            </tr>
            <tr>
              <td><strong>Vitest</strong></td>
              <td><TechStack version="vitest" className="version-badge" /></td>
              <td>Fast unit testing framework</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Section>
  )
}