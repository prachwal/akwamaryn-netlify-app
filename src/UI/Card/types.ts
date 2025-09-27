import { ComponentChildren } from 'preact';

/**
 * Props for the Card component
 */
export interface CardProps {
  /** The content to be displayed inside the card */
  children: ComponentChildren;
  /** Optional title for the card */
  title?: string;
  /** Heading level for the title (h1-h6) */
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the section element */
  [key: string]: any;
}