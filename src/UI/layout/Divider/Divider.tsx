import { createElement } from 'preact';

import './Divider.scss';
import type { DividerProps } from './types';

/**
 * Divider component for separating content sections
 *
 * @param props - The component props
 * @returns The rendered divider component
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" variant="dashed" thickness="thick" color="accent" />
 * ```
 */
export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  thickness = 'medium',
  color = 'default',
  className,
  ...rest
}: DividerProps) {
  const classes = [
    'divider',
    `divider--${orientation}`,
    `divider--${variant}`,
    `divider--${thickness}`,
    `divider--${color}`,
    className
  ].filter(Boolean).join(' ');

  // Use <hr> for horizontal dividers, <div> for vertical
  const elementType = orientation === 'horizontal' ? 'hr' : 'div';

  return createElement(elementType, {
    className: classes,
    ...rest
  });
}