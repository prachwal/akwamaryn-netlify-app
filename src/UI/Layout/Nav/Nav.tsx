import type { NavProps } from './types';

/**
 * Nav component for navigation elements
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <Nav>
 *   <ul>
 *     <li><a href="#home">Home</a></li>
 *     <li><a href="#about">About</a></li>
 *   </ul>
 * </Nav>
 * ```
 */
export function Nav({ children, className, ...rest }: NavProps) {
  return (
    <nav className={`nav ${className || ''}`} {...rest}>
      {children}
    </nav>
  );
}