import './Footer.scss';
import type { FooterProps } from './types';

/**
 * Footer component for displaying site footer content
 *
 * @param props - The component props
 * @returns The rendered footer component
 *
 * @example
 * ```tsx
 * <Footer>
 *   <p>Copyright 2023</p>
 * </Footer>
 * ```
 *
 * @example
 * ```tsx
 * <Footer className="main-footer">
 *   <nav>Footer navigation</nav>
 * </Footer>
 * ```
 */
export function Footer({
  children,
  className,
  ...rest
}: FooterProps) {
  return (
    <footer className={`footer ${className || ''}`} {...rest}>
      {children && children}
    </footer>
  );
}