import { createElement } from 'preact';

import './Card.scss';
import type { CardProps } from './types';

/**
 * A universal card component for displaying content in a styled container
 *
 * @param props - The component props
 * @returns The rendered card component
 *
 * @example
 * ```tsx
 * <Card title="My Card" titleLevel="h3" className="custom-card">
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export function Card({ children, title, titleLevel = 'h2', className, ...rest }: CardProps) {
  return (
    <section className={`card ${className || ''}`} {...rest}>
      {title && createElement(titleLevel, {}, title)}
      {children}
    </section>
  );
}