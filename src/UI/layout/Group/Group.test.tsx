import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Group } from './Group';

describe('Group', () => {
  it('renders children correctly', () => {
    render(<Group>Test content</Group>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Group>Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--default', 'group--md', 'group--vertical');
  });

  it('renders with custom className', () => {
    render(<Group className="custom-class">Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--default', 'group--md', 'group--vertical', 'custom-class');
  });

  it('renders with outlined variant', () => {
    render(<Group variant="outlined">Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--outlined', 'group--md', 'group--vertical');
  });

  it('renders with filled variant', () => {
    render(<Group variant="filled">Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--filled', 'group--md', 'group--vertical');
  });

  it('renders with sm spacing', () => {
    render(<Group spacing="sm">Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--default', 'group--sm', 'group--vertical');
  });

  it('renders with lg spacing', () => {
    render(<Group spacing="lg">Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--default', 'group--lg', 'group--vertical');
  });

  it('renders with horizontal direction', () => {
    render(<Group direction="horizontal">Test content</Group>);
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--default', 'group--md', 'group--horizontal');
  });

  it('renders with all props combined', () => {
    render(
      <Group
        variant="outlined"
        spacing="lg"
        direction="horizontal"
        className="custom"
      >
        Test content
      </Group>
    );
    const div = screen.getByText('Test content').closest('div');
    expect(div).toHaveClass('group', 'group--outlined', 'group--lg', 'group--horizontal', 'custom');
  });

  it('passes additional props to root element', () => {
    render(<Group data-testid="custom-group" aria-label="Custom Group">Test content</Group>);
    const div = screen.getByTestId('custom-group');
    expect(div).toHaveAttribute('aria-label', 'Custom Group');
  });

  it('renders complex children', () => {
    render(
      <Group variant="filled" spacing="sm">
        <div>Child 1</div>
        <p>Child 2</p>
        <span>Child 3</span>
      </Group>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
    const groupDiv = document.querySelector('.group');
    expect(groupDiv).toHaveClass('group', 'group--filled', 'group--sm', 'group--vertical');
  });
});