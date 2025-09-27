import { createElement } from 'preact';

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
 * <Header title="My Site" titleLevel="h1" className="main-header">
 *   <nav>Navigation</nav>
 * </Header>
 * ```
 *
 * @example
 * ```tsx
 * <Header title="My Site" titleLevel="h2" />
 * ```
 */
export function Header({
  children,
  title,
  titleLevel = 'h1',
  className,
  ...rest
}: HeaderProps) {
  return (
    <header className={`header ${className || ''}`} {...rest}>
      {title && createElement(titleLevel, {}, title)}
      {children && children}
    </header>
  );
}