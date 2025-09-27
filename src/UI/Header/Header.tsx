import './Header.scss';
import type { HeaderProps } from './types';

/**
 * Header component for displaying site header content
 *
 * @param props - The component props
 * @returns The rendered header component
 *
 * @example
 * ```tsx
 * <Header title="My Site" className="main-header">
 *   <nav>Navigation</nav>
 * </Header>
 * ```
 *
 * @example
 * ```tsx
 * <Header title="My Site" />
 * ```
 */
export function Header({
  children,
  title,
  className,
  ...rest
}: HeaderProps) {
  return (
    <header className={`header ${className || ''}`} {...rest}>
      {title && <h1>{title}</h1>}
      {children && children}
    </header>
  );
}