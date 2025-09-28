import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { Divider } from './Divider';

describe('Divider', () => {
  it('renders with default props', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider', 'divider--horizontal', 'divider--solid', 'divider--medium', 'divider--default');
  });

  it('renders with custom className', () => {
    render(<Divider className="custom-class" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider', 'custom-class');
  });

  it('renders horizontal orientation', () => {
    render(<Divider orientation="horizontal" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--horizontal');
    expect(divider.tagName).toBe('HR');
  });

  it('renders vertical orientation', () => {
    render(<Divider orientation="vertical" />);
    const divider = document.querySelector('.divider');
    expect(divider).toHaveClass('divider--vertical');
    expect(divider?.tagName).toBe('DIV');
  });

  it('renders with solid variant', () => {
    render(<Divider variant="solid" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--solid');
  });

  it('renders with dashed variant', () => {
    render(<Divider variant="dashed" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--dashed');
  });

  it('renders with dotted variant', () => {
    render(<Divider variant="dotted" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--dotted');
  });

  it('renders with thin thickness', () => {
    render(<Divider thickness="thin" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--thin');
  });

  it('renders with thick thickness', () => {
    render(<Divider thickness="thick" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--thick');
  });

  it('renders with accent color', () => {
    render(<Divider color="accent" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider--accent');
  });

  it('passes additional props to root element', () => {
    render(<Divider data-testid="custom-divider" aria-label="Custom Divider" />);
    const divider = screen.getByTestId('custom-divider');
    expect(divider).toHaveAttribute('aria-label', 'Custom Divider');
  });
});