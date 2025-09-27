import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders children correctly', () => {
    render(<Footer>Test content</Footer>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Footer>Test content</Footer>);
    const footer = screen.getByText('Test content').closest('footer');
    expect(footer).toHaveClass('footer');
  });

  it('renders with custom className', () => {
    render(<Footer className="custom-class">Test content</Footer>);
    const footer = screen.getByText('Test content').closest('footer');
    expect(footer).toHaveClass('footer', 'custom-class');
  });

  it('passes additional props to root element', () => {
    render(<Footer data-testid="custom-footer" aria-label="Custom Footer">Test content</Footer>);
    const footer = screen.getByTestId('custom-footer');
    expect(footer).toHaveAttribute('aria-label', 'Custom Footer');
  });

  it('renders complex children', () => {
    render(
      <Footer>
        <div>Child 1</div>
        <p>Child 2</p>
      </Footer>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});