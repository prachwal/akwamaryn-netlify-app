import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Header } from './Header';

describe('Header', () => {
  it('renders children correctly', () => {
    render(<Header>Test content</Header>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Header>Test content</Header>);
    const header = screen.getByText('Test content').closest('header');
    expect(header).toHaveClass('header');
  });

  it('renders with custom className', () => {
    render(<Header className="custom-class">Test content</Header>);
    const header = screen.getByText('Test content').closest('header');
    expect(header).toHaveClass('header', 'custom-class');
  });

  it('renders title as h1', () => {
    render(<Header title="Test Title">Test content</Header>);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('renders title with custom level', () => {
    render(<Header title="Test Title" titleLevel="h3">Test content</Header>);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('does not render title when not provided', () => {
    render(<Header>Test content</Header>);
    const headings = screen.queryAllByRole('heading');
    expect(headings).toHaveLength(0);
  });

  it('renders without children', () => {
    render(<Header title="Test Title" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title');
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('passes additional props to root element', () => {
    render(<Header data-testid="custom-header" aria-label="Custom Header">Test content</Header>);
    const header = screen.getByTestId('custom-header');
    expect(header).toHaveAttribute('aria-label', 'Custom Header');
  });

  it('renders complex children', () => {
    render(
      <Header title="Complex Header">
        <div>Child 1</div>
        <p>Child 2</p>
      </Header>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Complex Header');
  });
});