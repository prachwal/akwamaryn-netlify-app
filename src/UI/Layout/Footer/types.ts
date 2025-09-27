import { ComponentChildren } from 'preact';

/**
 * Props for the Footer component
 */
export interface FooterProps {
  /** The content to be displayed inside the footer */
  children?: ComponentChildren;
  /** Optional title for the footer */
  title?: string;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}