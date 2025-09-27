import type { AsideProps } from './types';

/**
 * Aside component for supplementary content (sidebar)
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <Aside className="sidebar">
 *   <nav>
 *     <ul>
 *       <li><a href="#home">Home</a></li>
 *       <li><a href="#about">About</a></li>
 *     </ul>
 *   </nav>
 * </Aside>
 * ```
 */
export function Aside({ children, className, ...rest }: AsideProps) {
  return (
    <aside className={`aside ${className || ''}`} {...rest}>
      {children}
    </aside>
  );
}