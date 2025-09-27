import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Aside } from './Aside';

describe('Aside', () => {
  it('renders children correctly', () => {
    render(<Aside>Test content</Aside>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Aside>Test content</Aside>);
    const aside = screen.getByText('Test content').closest('aside');
    expect(aside).toHaveClass('aside');
  });

  it('renders with custom className', () => {
    render(<Aside className="custom-class">Test content</Aside>);
    const aside = screen.getByText('Test content').closest('aside');
    expect(aside).toHaveClass('aside', 'custom-class');
  });

  it('passes additional props to root element', () => {
    render(<Aside data-testid="custom-aside" aria-label="Custom Aside">Test content</Aside>);
    const aside = screen.getByTestId('custom-aside');
    expect(aside).toHaveAttribute('aria-label', 'Custom Aside');
  });

  it('renders complex children', () => {
    render(
      <Aside>
        <div>Child 1</div>
        <p>Child 2</p>
      </Aside>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Aside />);
    const aside = screen.getByRole('complementary');
    expect(aside).toBeInTheDocument();
    expect(aside).toHaveClass('aside');
  });
});