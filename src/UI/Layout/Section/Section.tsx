import type { SectionProps } from './types';

/**
 * Section component for grouping related content
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <Section className="hero-section">
 *   <h2>Welcome</h2>
 *   <p>This is a section of content</p>
 * </Section>
 * ```
 */
export function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section className={`section ${className || ''}`} {...rest}>
      {children}
    </section>
  );
}