import './Column.scss';
import type { ColumnProps } from './types';

/**
 * Column component for responsive grid layouts
 *
 * @param props - The component props
 * @returns The rendered column component
 *
 * @example
 * ```tsx
 * <Column span={6} md={4} lg={3}>
 *   Content
 * </Column>
 *
 * <Column span={12} offset={2}>
 *   Full width with offset
 * </Column>
 * ```
 */
export function Column({
  children,
  span,
  offset,
  order,
  xs,
  sm,
  md,
  lg,
  className,
  ...rest
}: ColumnProps) {
  const columnClasses = [
    'column',
    span && `column--span-${span}`,
    offset && `column--offset-${offset}`,
    order !== undefined && `column--order-${order}`,
    xs && `column--xs-${xs}`,
    sm && `column--sm-${sm}`,
    md && `column--md-${md}`,
    lg && `column--lg-${lg}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={columnClasses} {...rest}>
      {children}
    </div>
  );
}