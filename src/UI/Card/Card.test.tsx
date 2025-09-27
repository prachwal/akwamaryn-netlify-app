import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Card>Test content</Card>);
    const section = screen.getByText('Test content').closest('section');
    expect(section).toHaveClass('card');
  });

  it('renders with custom className', () => {
    render(<Card className="custom-class">Test content</Card>);
    const section = screen.getByText('Test content').closest('section');
    expect(section).toHaveClass('card', 'custom-class');
  });

  it('renders title with default h2 level', () => {
    render(<Card title="Test Title">Test content</Card>);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('renders title with custom level', () => {
    render(<Card title="Test Title" titleLevel="h3">Test content</Card>);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('does not render title when not provided', () => {
    render(<Card>Test content</Card>);
    const headings = screen.queryAllByRole('heading');
    expect(headings).toHaveLength(0);
  });

  it('passes additional props to section element', () => {
    render(<Card data-testid="custom-card" aria-label="Custom Card">Test content</Card>);
    const section = screen.getByTestId('custom-card');
    expect(section).toHaveAttribute('aria-label', 'Custom Card');
  });

  it('renders complex children', () => {
    render(
      <Card title="Complex Card">
        <div>Child 1</div>
        <p>Child 2</p>
      </Card>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Complex Card');
  });
});