import { ComponentChildren } from 'preact';

/**
 * Props for the Column component
 */
export interface ColumnProps {
  /** The content to be displayed inside the column */
  children?: ComponentChildren;
  /** Width in grid units (1-12) */
  span?: number;
  /** Offset in grid units (0-11) */
  offset?: number;
  /** Display order */
  order?: number;
  /** Width on mobile (1-12) */
  xs?: number;
  /** Width on tablet (1-12) */
  sm?: number;
  /** Width on desktop (1-12) */
  md?: number;
  /** Width on large desktop (1-12) */
  lg?: number;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}