/**
 * Props for the Hamburger component
 */
export interface HamburgerProps {
  /** Whether the hamburger menu is open (changes to X) */
  isOpen?: boolean;
  /** Click handler for the hamburger button */
  onClick?: () => void;
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the button element */
  [key: string]: any;
}