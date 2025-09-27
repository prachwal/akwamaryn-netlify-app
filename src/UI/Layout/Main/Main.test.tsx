import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Main } from './Main';

describe('Main', () => {
  it('renders children correctly', () => {
    render(<Main>Test content</Main>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<Main>Test content</Main>);
    const main = screen.getByText('Test content').closest('main');
    expect(main).toHaveClass('main');
  });

  it('renders with custom className', () => {
    render(<Main className="custom-class">Test content</Main>);
    const main = screen.getByText('Test content').closest('main');
    expect(main).toHaveClass('main', 'custom-class');
  });

  it('passes additional props to root element', () => {
    render(<Main data-testid="custom-main" aria-label="Custom Main">Test content</Main>);
    const main = screen.getByTestId('custom-main');
    expect(main).toHaveAttribute('aria-label', 'Custom Main');
  });

  it('renders complex children', () => {
    render(
      <Main>
        <div>Child 1</div>
        <p>Child 2</p>
      </Main>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Main />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});