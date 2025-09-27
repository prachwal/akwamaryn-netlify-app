import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { Hamburger } from './Hamburger';

describe('Hamburger', () => {
  it('renders a button element', () => {
    render(<Hamburger />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with default closed state', () => {
    render(<Hamburger />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hamburger');
    expect(button).not.toHaveClass('hamburger--open');
  });

  it('renders with open state when isOpen is true', () => {
    render(<Hamburger isOpen={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hamburger', 'hamburger--open');
  });

  it('has correct ARIA attributes in closed state', () => {
    render(<Hamburger />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Open menu');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('has correct ARIA attributes in open state', () => {
    render(<Hamburger isOpen={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Close menu');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders three line elements', () => {
    render(<Hamburger />);
    const lines = document.querySelectorAll('.hamburger__line');
    expect(lines).toHaveLength(3);
    expect(lines[0]).toHaveClass('hamburger__line--top');
    expect(lines[1]).toHaveClass('hamburger__line--middle');
    expect(lines[2]).toHaveClass('hamburger__line--bottom');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(<Hamburger onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    render(<Hamburger className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('hamburger', 'custom-class');
  });

  it('passes additional props to button element', () => {
    render(<Hamburger data-testid="custom-hamburger" disabled />);
    const button = screen.getByTestId('custom-hamburger');
    expect(button).toBeDisabled();
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(<Hamburger onClick={mockOnClick} disabled />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});