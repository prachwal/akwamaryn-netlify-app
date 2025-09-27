import { ComponentChildren } from 'preact';

/**
 * Props for the Header component
 */
export interface HeaderProps {
  /** The content to be displayed inside the header */
  children?: ComponentChildren;
  /** Optional title for the header */
  title?: string;
  /** Heading level for the title (h1-h6) */
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}