import { ComponentChildren } from 'preact';

/**
 * Props for the Main component
 */
export interface MainProps {
  /** The content to be displayed inside the main element */
  children?: ComponentChildren;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}