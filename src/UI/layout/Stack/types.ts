import { ComponentChildren } from 'preact';

/**
 * Props for the Stack component
 */
export interface StackProps {
  /** The content to be displayed inside the stack */
  children?: ComponentChildren;
  /** The spacing between child elements */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** The horizontal alignment of child elements */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** The vertical distribution of child elements */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}