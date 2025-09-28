import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Grid } from './Grid';

describe('Grid', () => {
  it('renders children correctly', () => {
    render(<Grid>Test content</Grid>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Grid>Test content</Grid>);
    const grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid--gap-md');
  });

  it('renders with custom className', () => {
    render(<Grid className="custom-class">Test content</Grid>);
    const grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid', 'custom-class');
  });

  it('renders with numeric columns', () => {
    render(<Grid columns={3}>Test content</Grid>);
    const grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveStyle({ '--grid-columns': 'repeat(3, 1fr)' });
  });

  it('renders with string columns template', () => {
    const template = '1fr 2fr 1fr';
    render(<Grid columns={template}>Test content</Grid>);
    const grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveStyle({ '--grid-columns': template });
  });

  it('renders with different gap values', () => {
    const { rerender } = render(<Grid gap="none">Test content</Grid>);
    let grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--gap-none');

    rerender(<Grid gap="sm">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--gap-sm');

    rerender(<Grid gap="lg">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--gap-lg');

    rerender(<Grid gap="xl">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--gap-xl');
  });

  it('renders with alignItems', () => {
    const { rerender } = render(<Grid alignItems="start">Test content</Grid>);
    let grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--align-items-start');

    rerender(<Grid alignItems="center">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--align-items-center');

    rerender(<Grid alignItems="end">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--align-items-end');
  });

  it('renders with justifyItems', () => {
    const { rerender } = render(<Grid justifyItems="start">Test content</Grid>);
    let grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--justify-items-start');

    rerender(<Grid justifyItems="center">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--justify-items-center');

    rerender(<Grid justifyItems="stretch">Test content</Grid>);
    grid = screen.getByText('Test content').closest('div');
    expect(grid).toHaveClass('grid--justify-items-stretch');
  });

  it('passes additional props to root element', () => {
    render(<Grid data-testid="custom-grid" aria-label="Custom Grid">Test content</Grid>);
    const grid = screen.getByTestId('custom-grid');
    expect(grid).toHaveAttribute('aria-label', 'Custom Grid');
  });

  it('renders complex children', () => {
    render(
      <Grid columns={2}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
        <div>Child 4</div>
      </Grid>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
    expect(screen.getByText('Child 4')).toBeInTheDocument();
  });

  it('combines all props correctly', () => {
    render(
      <Grid
        columns={4}
        gap="lg"
        alignItems="center"
        justifyItems="start"
        className="test-class"
        data-testid="combined-grid"
      >
        Combined test
      </Grid>
    );
    const grid = screen.getByTestId('combined-grid');
    expect(grid).toHaveClass(
      'grid',
      'grid--gap-lg',
      'grid--align-items-center',
      'grid--justify-items-start',
      'test-class'
    );
    expect(grid).toHaveStyle({ '--grid-columns': 'repeat(4, 1fr)' });
    expect(screen.getByText('Combined test')).toBeInTheDocument();
  });
});