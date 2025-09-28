import './Group.scss';
import type { GroupProps } from './types';

/**
 * Group component for grouping related elements with shared background and border styling.
 *
 * @param props - The component props
 * @returns The rendered group component
 *
 * @example
 * ```tsx
 * <Group variant="outlined" spacing="md" direction="vertical">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Group>
 * ```
 */
export function Group({
  children,
  variant = 'default',
  spacing = 'md',
  direction = 'vertical',
  className,
  ...rest
}: GroupProps) {
  const classes = [
    'group',
    `group--${variant}`,
    `group--${spacing}`,
    `group--${direction}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}