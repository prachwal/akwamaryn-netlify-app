import { ComponentChildren } from 'preact';

/**
 * Props for the Section component
 */
export interface SectionProps {
  /** The content to be displayed inside the section */
  children?: ComponentChildren;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}