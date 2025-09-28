import { Nav, Section, Card, Tooltip } from '@ui/index'
import { TechStack } from '@components/features/TechStack'

/**
 * Props for the MobileMenu component
 */
export interface MobileMenuProps {
  /** Whether the mobile menu is open */
  isOpen: boolean
  /** Function to close the mobile menu */
  onClose: () => void
}

/**
 * Mobile menu overlay and content component
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu">
        <Nav>
          <ul className="mobile-nav-list">
            <li><a href="/" onClick={onClose}>🏠 Home</a></li>
            <li><a href="/features" onClick={onClose}>✨ Features</a></li>
            <li><a href="/responsive" onClick={onClose}>📱 Responsive</a></li>
            <li><a href="/about" onClick={onClose}>📖 About</a></li>
            <li><a href="/settings" onClick={onClose}>⚙️ Settings</a></li>
          </ul>
        </Nav>

        <Section>
          <h3>Quick Info</h3>
          <Card>
            <p><strong>Version:</strong> {__APP_VERSION__}</p>
            <p><strong>Tech Stack:</strong></p>
            <div className="tech-stack-compact">
              <Tooltip content={<TechStack version="preact" />}>
                <span className="tech-icon">⚛️</span>
              </Tooltip>
              <Tooltip content={<TechStack version="typescript" />}>
                <span className="tech-icon">🔷</span>
              </Tooltip>
              <Tooltip content={<TechStack version="vite" />}>
                <span className="tech-icon">⚡</span>
              </Tooltip>
              <Tooltip content={<TechStack version="scss" />}>
                <span className="tech-icon">🎨</span>
              </Tooltip>
              <Tooltip content={<TechStack version="vitest" />}>
                <span className="tech-icon">🧪</span>
              </Tooltip>
            </div>
          </Card>
        </Section>
      </div>
    </>
  )
}