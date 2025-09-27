import { createElement } from 'preact';

import './Article.scss';
import type { ArticleProps } from './types';

/**
 * Article component for displaying content sections
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <Article title="My Article" titleLevel="h3" className="custom-class">
 *   <p>Article content</p>
 * </Article>
 * ```
 */
export function Article({
  children,
  title,
  titleLevel = 'h2',
  className,
  ...rest
}: ArticleProps) {
  return (
    <article className={`article ${className || ''}`} {...rest}>
      {title && createElement(titleLevel, {}, title)}
      {children}
    </article>
  );
}