import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Nav } from './Nav';

describe('Nav', () => {
  it('renders children correctly', () => {
    render(<Nav>Test content</Nav>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Nav>Test content</Nav>);
    const nav = screen.getByText('Test content').closest('nav');
    expect(nav).toHaveClass('nav');
  });

  it('renders with custom className', () => {
    render(<Nav className="custom-class">Test content</Nav>);
    const nav = screen.getByText('Test content').closest('nav');
    expect(nav).toHaveClass('nav', 'custom-class');
  });

  it('passes additional props to root element', () => {
    render(<Nav data-testid="custom-nav" aria-label="Custom Nav">Test content</Nav>);
    const nav = screen.getByTestId('custom-nav');
    expect(nav).toHaveAttribute('aria-label', 'Custom Nav');
  });

  it('renders complex children', () => {
    render(
      <Nav>
        <div>Child 1</div>
        <p>Child 2</p>
      </Nav>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('nav');
  });
});