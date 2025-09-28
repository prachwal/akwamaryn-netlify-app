import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Row } from './Row';

describe('Row', () => {
  it('renders children correctly', () => {
    render(<Row>Test content</Row>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Row>Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row');
  });

  it('renders with custom className', () => {
    render(<Row className="custom-class">Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row', 'custom-class');
  });

  it('applies default alignment and justify classes', () => {
    render(<Row>Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row--align-stretch');
    expect(row).toHaveClass('row--justify-start');
    expect(row).toHaveClass('row--gap-md');
    expect(row).toHaveClass('row--wrap');
  });

  it('applies custom alignment', () => {
    render(<Row align="center">Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row--align-center');
  });

  it('applies custom justify', () => {
    render(<Row justify="between">Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row--justify-between');
  });

  it('applies custom gap', () => {
    render(<Row gap="lg">Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row--gap-lg');
  });

  it('applies wrap class when wrap is true', () => {
    render(<Row wrap={true}>Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).toHaveClass('row--wrap');
  });

  it('does not apply wrap class when wrap is false', () => {
    render(<Row wrap={false}>Test content</Row>);
    const row = screen.getByText('Test content').closest('div');
    expect(row).not.toHaveClass('row--wrap');
  });

  it('passes additional props to root element', () => {
    render(<Row data-testid="custom-row" aria-label="Custom Row">Test content</Row>);
    const row = screen.getByTestId('custom-row');
    expect(row).toHaveAttribute('aria-label', 'Custom Row');
  });

  it('renders complex children', () => {
    render(
      <Row>
        <div>Child 1</div>
        <div>Child 2</div>
      </Row>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});