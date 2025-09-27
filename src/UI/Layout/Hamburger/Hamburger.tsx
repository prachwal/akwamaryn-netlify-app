import './Hamburger.scss';
import type { HamburgerProps } from './types';

/**
 * Hamburger menu button component that transforms into an X when open
 *
 * @param props - The component props
 * @returns The rendered hamburger button
 *
 * @example
 * ```tsx
 * <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
 * ```
 */
export function Hamburger({
  isOpen = false,
  onClick,
  className,
  ...rest
}: HamburgerProps) {
  return (
    <button
      type="button"
      className={`hamburger ${isOpen ? 'hamburger--open' : ''} ${className || ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      {...rest}
    >
      <span className="hamburger__line hamburger__line--top" />
      <span className="hamburger__line hamburger__line--middle" />
      <span className="hamburger__line hamburger__line--bottom" />
    </button>
  );
}