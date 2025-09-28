import './Row.scss';
import type { RowProps } from './types';

/**
 * Row component for horizontal flexbox layouts
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <Row gap="md" align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Row>
 * ```
 */
export function Row({
  children,
  align = 'stretch',
  justify = 'start',
  gap = 'md',
  wrap = true,
  className,
  ...rest
}: RowProps) {
  const classes = [
    'row',
    `row--align-${align}`,
    `row--justify-${justify}`,
    `row--gap-${gap}`,
    wrap ? 'row--wrap' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}