import { ComponentChildren } from 'preact';

/**
 * Props for the Aside component
 */
export interface AsideProps {
  /** The content to be displayed in the aside */
  children?: ComponentChildren;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}