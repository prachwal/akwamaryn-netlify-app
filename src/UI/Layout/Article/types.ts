import { ComponentChildren } from 'preact';

/**
 * Props for the Article component
 */
export interface ArticleProps {
  /** The content to be displayed inside the article */
  children: ComponentChildren;
  /** Optional title for the article */
  title?: string;
  /** Heading level for the title (h1-h6) */
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}