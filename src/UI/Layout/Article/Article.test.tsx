import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Article } from './Article';

describe('Article', () => {
  it('renders children correctly', () => {
    render(<Article>Test content</Article>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Article>Test content</Article>);
    const article = screen.getByText('Test content').closest('article');
    expect(article).toHaveClass('article');
  });

  it('renders with custom className', () => {
    render(<Article className="custom-class">Test content</Article>);
    const article = screen.getByText('Test content').closest('article');
    expect(article).toHaveClass('article', 'custom-class');
  });

  it('renders title with default h2 level', () => {
    render(<Article title="Test Title">Test content</Article>);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('renders title with custom level', () => {
    render(<Article title="Test Title" titleLevel="h3">Test content</Article>);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('does not render title when not provided', () => {
    render(<Article>Test content</Article>);
    const headings = screen.queryAllByRole('heading');
    expect(headings).toHaveLength(0);
  });

  it('passes additional props to root element', () => {
    render(<Article data-testid="custom-article" aria-label="Custom Article">Test content</Article>);
    const article = screen.getByTestId('custom-article');
    expect(article).toHaveAttribute('aria-label', 'Custom Article');
  });

  it('renders complex children', () => {
    render(
      <Article title="Complex Article">
        <div>Child 1</div>
        <p>Child 2</p>
      </Article>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Complex Article');
  });
});