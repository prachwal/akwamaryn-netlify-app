import './Stack.scss';
import type { StackProps } from './types';

/**
 * Stack component for vertically stacking elements with controlled spacing.
 *
 * @param props - The component props
 * @returns The rendered stack component
 *
 * @example
 * ```tsx
 * <Stack spacing="lg" align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 * ```
 */
export function Stack({
  children,
  spacing = 'md',
  align,
  justify,
  className,
  ...rest
}: StackProps) {
  const classes = [
    'stack',
    `stack--${spacing}`,
    align && `stack--align-${align}`,
    justify && `stack--justify-${justify}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}