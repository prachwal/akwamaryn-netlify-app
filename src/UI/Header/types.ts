import { ComponentChildren } from 'preact';

/**
 * Props for the Header component
 */
export interface HeaderProps {
  /** The content to be displayed inside the header */
  children?: ComponentChildren;
  /** Optional title for the header */
  title?: string;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}