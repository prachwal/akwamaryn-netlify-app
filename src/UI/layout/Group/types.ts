import { ComponentChildren } from 'preact';

/**
 * Props for the Group component
 */
export interface GroupProps {
  /** The content to be displayed inside the group */
  children?: ComponentChildren;
  /** The visual style variant of the group */
  variant?: 'default' | 'outlined' | 'filled';
  /** The spacing between child elements */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /** The layout direction of the group */
  direction?: 'horizontal' | 'vertical';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}