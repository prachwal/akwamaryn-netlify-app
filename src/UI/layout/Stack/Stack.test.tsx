import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children correctly', () => {
    render(<Stack>Test content</Stack>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Stack>Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--md');
  });

  it('renders with custom className', () => {
    render(<Stack className="custom-class">Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--md', 'custom-class');
  });

  it('renders with xs spacing', () => {
    render(<Stack spacing="xs">Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--xs');
  });

  it('renders with lg spacing', () => {
    render(<Stack spacing="lg">Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--lg');
  });

  it('renders with xl spacing', () => {
    render(<Stack spacing="xl">Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--xl');
  });

  it('renders with align center', () => {
    render(<Stack align="center">Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--md', 'stack--align-center');
  });

  it('renders with justify between', () => {
    render(<Stack justify="between">Test content</Stack>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--md', 'stack--justify-between');
  });

  it('renders with all props combined', () => {
    render(
      <Stack
        spacing="lg"
        align="end"
        justify="around"
        className="custom"
      >
        Test content
      </Stack>
    );
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('stack', 'stack--lg', 'stack--align-end', 'stack--justify-around', 'custom');
  });

  it('passes additional props to root element', () => {
    render(<Stack data-testid="custom-stack" aria-label="Custom Stack">Test content</Stack>);
    const div = screen.getByTestId('custom-stack');
    expect(div).toHaveAttribute('aria-label', 'Custom Stack');
  });

  it('renders complex children', () => {
    render(
      <Stack spacing="sm" align="center">
        <div>Child 1</div>
        <p>Child 2</p>
        <span>Child 3</span>
      </Stack>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
    const stackDiv = document.querySelector('.stack');
    expect(stackDiv).toHaveClass('stack', 'stack--sm', 'stack--align-center');
  });
});