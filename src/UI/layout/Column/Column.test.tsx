import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Column } from './Column';

describe('Column', () => {
  it('renders children correctly', () => {
    render(<Column>Test content</Column>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Column>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column');
  });

  it('renders with custom className', () => {
    render(<Column className="custom-class">Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'custom-class');
  });

  it('renders with span prop', () => {
    render(<Column span={6}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--span-6');
  });

  it('renders with offset prop', () => {
    render(<Column offset={3}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--offset-3');
  });

  it('renders with order prop', () => {
    render(<Column order={2}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--order-2');
  });

  it('renders with xs breakpoint', () => {
    render(<Column xs={4}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--xs-4');
  });

  it('renders with sm breakpoint', () => {
    render(<Column sm={6}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--sm-6');
  });

  it('renders with md breakpoint', () => {
    render(<Column md={8}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--md-8');
  });

  it('renders with lg breakpoint', () => {
    render(<Column lg={12}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--lg-12');
  });

  it('renders with multiple breakpoints', () => {
    render(<Column xs={12} sm={6} md={4} lg={3}>Test content</Column>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('column', 'column--xs-12', 'column--sm-6', 'column--md-4', 'column--lg-3');
  });

  it('renders with all props combined', () => {
    render(
      <Column
        span={6}
        offset={2}
        order={1}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="custom"
      >
        Test content
      </Column>
    );
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass(
      'column',
      'column--span-6',
      'column--offset-2',
      'column--order-1',
      'column--xs-12',
      'column--sm-6',
      'column--md-4',
      'column--lg-3',
      'custom'
    );
  });

  it('passes additional props to root element', () => {
    render(<Column data-testid="custom-column" aria-label="Custom Column">Test content</Column>);
    const div = screen.getByTestId('custom-column');
    expect(div).toHaveAttribute('aria-label', 'Custom Column');
  });

  it('renders complex children', () => {
    render(
      <Column span={8}>
        <div>Child 1</div>
        <p>Child 2</p>
      </Column>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    const columnDiv = document.querySelector('.column');
    expect(columnDiv).toHaveClass('column', 'column--span-8');
  });
});