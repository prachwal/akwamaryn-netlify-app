import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Container } from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Container>Test content</Container>);
    const container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('container--max-width-lg');
    expect(container).toHaveClass('container--padding-md');
  });

  it('renders with custom className', () => {
    render(<Container className="custom-class">Test content</Container>);
    const container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container', 'custom-class');
  });

  it('renders with different maxWidth values', () => {
    const { rerender } = render(<Container maxWidth="sm">Test content</Container>);
    let container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--max-width-sm');

    rerender(<Container maxWidth="md">Test content</Container>);
    container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--max-width-md');

    rerender(<Container maxWidth="xl">Test content</Container>);
    container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--max-width-xl');

    rerender(<Container maxWidth="full">Test content</Container>);
    container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--max-width-full');
  });

  it('renders with different padding values', () => {
    const { rerender } = render(<Container padding="none">Test content</Container>);
    let container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--padding-none');

    rerender(<Container padding="sm">Test content</Container>);
    container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--padding-sm');

    rerender(<Container padding="lg">Test content</Container>);
    container = screen.getByText('Test content').closest('div');
    expect(container).toHaveClass('container--padding-lg');
  });

  it('passes additional props to root element', () => {
    render(<Container data-testid="custom-container" aria-label="Custom Container">Test content</Container>);
    const container = screen.getByTestId('custom-container');
    expect(container).toHaveAttribute('aria-label', 'Custom Container');
  });

  it('renders complex children', () => {
    render(
      <Container>
        <div>Child 1</div>
        <p>Child 2</p>
        <span>Child 3</span>
      </Container>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
  });

  it('combines all props correctly', () => {
    render(
      <Container
        maxWidth="xl"
        padding="lg"
        className="test-class"
        data-testid="combined-container"
      >
        Combined test
      </Container>
    );
    const container = screen.getByTestId('combined-container');
    expect(container).toHaveClass(
      'container',
      'container--max-width-xl',
      'container--padding-lg',
      'test-class'
    );
    expect(screen.getByText('Combined test')).toBeInTheDocument();
  });
});