import { Nav, Hamburger } from '@ui/index'

/**
 * Props for the AppHeader component
 */
export interface AppHeaderProps {
  /** Whether the mobile menu is open */
  isMobileMenuOpen: boolean
  /** Function to toggle mobile menu */
  onToggleMobileMenu: () => void
}

/**
 * App header component with navigation and mobile menu toggle
 */
export function AppHeader({ isMobileMenuOpen, onToggleMobileMenu }: AppHeaderProps) {
  return (
    <div className="header-content">
      <h1 className="app-title">Akwamaryn</h1>
      <Nav className="desktop-nav">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/responsive">Responsive</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </Nav>

      <Hamburger
        isOpen={isMobileMenuOpen}
        onClick={onToggleMobileMenu}
        className="mobile-hamburger"
      />
    </div>
  )
}