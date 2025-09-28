import { ComponentChildren } from 'preact';

/**
 * Props for the Grid component
 */
export interface GridProps {
  /** The content to be displayed inside the grid */
  children?: ComponentChildren;
  /** Number of columns or grid template */
  columns?: number | string;
  /** Gap between grid items */
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Vertical alignment of grid items */
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  /** Horizontal alignment of grid items */
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}