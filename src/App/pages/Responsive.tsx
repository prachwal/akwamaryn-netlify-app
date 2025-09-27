import { Card, Section } from '@ui/index'

/**
 * Props for the Responsive component
 */
export interface ResponsiveProps {
  /** No props currently defined */
}

/**
 * Responsive page component displaying responsive behavior demo
 *
 * @param _props - Component props (currently empty)
 * @returns The responsive page JSX element
 *
 * @example
 * ```tsx
 * <Responsive />
 * ```
 */
export function Responsive(_props: ResponsiveProps) {
  return (
    <Section>
      <Card title="Responsive Behavior" titleLevel="h3">
        <p>This layout demonstrates several responsive patterns:</p>
        <ul>
          <li><strong>Desktop (≥1024px):</strong> Sidebar on the left, main content on the right</li>
          <li><strong>Tablet (768px-1023px):</strong> Sidebar moves below main content</li>
          <li><strong>Mobile ({'<'}768px):</strong> Single column layout with stacked sections</li>
          <li><strong>Landscape mode:</strong> Optimized for horizontal viewing on small screens</li>
        </ul>

        <div className="responsive-demo">
          <div className="demo-box desktop-only">Desktop View</div>
          <div className="demo-box tablet-only">Tablet View</div>
          <div className="demo-box mobile-only">Mobile View</div>
        </div>
      </Card>
    </Section>
  )
}