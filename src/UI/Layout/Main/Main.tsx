import './Main.scss';
import type { MainProps } from './types';

/**
 * Main component for displaying main content area
 *
 * @param props - The component props
 * @returns The rendered main component
 *
 * @example
 * ```tsx
 * <Main>
 *   <p>Main content</p>
 * </Main>
 * ```
 *
 * @example
 * ```tsx
 * <Main className="main-content">
 *   <article>Article content</article>
 * </Main>
 * ```
 */
export function Main({
  children,
  className,
  ...rest
}: MainProps) {
  return (
    <main className={`main ${className || ''}`} {...rest}>
      {children && children}
    </main>
  );
}