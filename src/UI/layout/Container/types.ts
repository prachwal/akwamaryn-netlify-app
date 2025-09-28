import { ComponentChildren } from 'preact';

/**
 * Props for the Container component
 */
export interface ContainerProps {
  /** The content to be displayed inside the container */
  children?: ComponentChildren;
  /** Maximum width of the container */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Internal padding of the container */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}