import { Section, Nav, Card } from '@ui/index'

/**
 * Sidebar component with navigation and information sections
 */
export function Sidebar() {
  return (
    <>
      <Section>
        <h3>Navigation</h3>
        <Nav>
          <ul className="sidebar-nav">
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/features">✨ Features</a></li>
            <li><a href="/responsive">📱 Responsive</a></li>
            <li><a href="/about">📖 About</a></li>
            <li><a href="/settings">⚙️ Settings</a></li>
          </ul>
        </Nav>
      </Section>

      <Section>
        <h3>Quick Info</h3>
        <Card>
          <p><strong>Version:</strong> {__APP_VERSION__}</p>
          <p><strong>Tech Stack:</strong></p>
          <div className="tech-stack-compact">
            <span className="tech-icon">⚛️</span>
            <span className="tech-icon">🔷</span>
            <span className="tech-icon">⚡</span>
            <span className="tech-icon">🎨</span>
            <span className="tech-icon">🧪</span>
          </div>
        </Card>
      </Section>

      <Section>
        <h3>Layout Info</h3>
        <Card>
          <p><strong>Breakpoints:</strong></p>
          <ul>
            <li>Mobile: {'<'} 480px</li>
            <li>Tablet: {'<'} 768px</li>
            <li>Desktop: ≥ 1024px</li>
          </ul>
          <p className="responsive-note">
            Resize your browser to see responsive behavior!
          </p>
        </Card>
      </Section>
    </>
  )
}