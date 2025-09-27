import { ComponentChildren } from 'preact';

/**
 * Props for the Nav component
 */
export interface NavProps {
  /** The navigation content */
  children?: ComponentChildren;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}