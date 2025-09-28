import { ComponentChildren } from 'preact';

/**
 * Props for the Row component
 */
export interface RowProps {
  /** The content to be displayed inside the row */
  children: ComponentChildren;
  /** Vertical alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Horizontal alignment of items */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether items should wrap */
  wrap?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}