import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Section } from './Section';

describe('Section', () => {
  it('renders children correctly', () => {
    render(<Section>Test content</Section>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Section>Test content</Section>);
    const section = screen.getByText('Test content').closest('section');
    expect(section).toHaveClass('section');
  });

  it('renders with custom className', () => {
    render(<Section className="custom-class">Test content</Section>);
    const section = screen.getByText('Test content').closest('section');
    expect(section).toHaveClass('section', 'custom-class');
  });

  it('passes additional props to root element', () => {
    render(<Section data-testid="custom-section" aria-label="Custom Section">Test content</Section>);
    const section = screen.getByTestId('custom-section');
    expect(section).toHaveAttribute('aria-label', 'Custom Section');
  });

  it('renders complex children', () => {
    render(
      <Section>
        <div>Child 1</div>
        <p>Child 2</p>
      </Section>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Section />);
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('section');
  });
});