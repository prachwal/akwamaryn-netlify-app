import './Container.scss';
import type { ContainerProps } from './types';

/**
 * Container component that provides max-width constraints and centering
 *
 * @param props - The component props
 * @returns The rendered container component
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg" padding="md">
 *   <h1>Content</h1>
 *   <p>More content here</p>
 * </Container>
 * ```
 */
export function Container({
  children,
  maxWidth = 'lg',
  padding = 'md',
  className,
  ...rest
}: ContainerProps) {
  const containerClasses = [
    'container',
    `container--max-width-${maxWidth}`,
    `container--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
}