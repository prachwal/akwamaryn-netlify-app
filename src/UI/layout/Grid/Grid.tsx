import './Grid.scss';
import type { GridProps } from './types';

/**
 * Grid component for creating responsive CSS Grid layouts
 *
 * @param props - The component props
 * @returns The rendered grid component
 *
 * @example
 * ```tsx
 * <Grid columns={3} gap="md" alignItems="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * <Grid columns="1fr 2fr 1fr" gap="lg">
 *   <div>Sidebar</div>
 *   <div>Main content</div>
 *   <div>Sidebar</div>
 * </Grid>
 * ```
 */
export function Grid({
  children,
  columns = 12,
  gap = 'md',
  alignItems,
  justifyItems,
  className,
  ...rest
}: GridProps) {
  const gridClasses = [
    'grid',
    `grid--gap-${gap}`,
    alignItems && `grid--align-items-${alignItems}`,
    justifyItems && `grid--justify-items-${justifyItems}`,
    className
  ].filter(Boolean).join(' ');

  const gridStyle = {
    '--grid-columns': typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
  };

  return (
    <div className={gridClasses} style={gridStyle} {...rest}>
      {children}
    </div>
  );
}