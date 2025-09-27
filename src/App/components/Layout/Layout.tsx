import './Layout.scss'
import { useState } from 'preact/hooks'
import { Counter } from '@components/features/Counter'
import { TechStack } from '@components/features/TechStack'
import { Card, Header, Footer, Main, Article, Aside, Nav, Section, Hamburger, Tooltip } from '@ui/index'

import { GeolocationDisplay } from '@/App/components/GeolocationDisplay'

/**
 * Props for the Layout component
 */
export interface LayoutProps {
  /** The main content to render */
  children?: any
}

/**
 * Layout component with responsive layout including sidebar
 *
 * @param props - Component props
 * @returns The layout JSX element
 */
export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-layout">
      <Header className="app-header">
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
            onClick={toggleMobileMenu}
            className="mobile-hamburger"
          />
        </div>
      </Header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu} />
          <div className="mobile-menu">
            <Nav>
              <ul className="mobile-nav-list">
                <li><a href="/" onClick={toggleMobileMenu}>🏠 Home</a></li>
                <li><a href="/features" onClick={toggleMobileMenu}>✨ Features</a></li>
                <li><a href="/responsive" onClick={toggleMobileMenu}>📱 Responsive</a></li>
                <li><a href="/about" onClick={toggleMobileMenu}>📖 About</a></li>
                <li><a href="/settings" onClick={toggleMobileMenu}>⚙️ Settings</a></li>
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
      )}

      <div className="app-content">
        <Aside className="sidebar">
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
        </Aside>

        <Main className="app-main">
          {children || (
            <Article title="Welcome to Akwamaryn App" titleLevel="h2">
              <Section id="counter">
                <Card title="Interactive Counter" titleLevel="h3">
                  <Counter />
                  <p>
                    This counter demonstrates Zustand state management.
                    Edit <code>src/App/App.tsx</code> and save to test HMR.
                  </p>
                </Card>
              </Section>

              <Section id="geolocation">
                <GeolocationDisplay title="Your Location" titleLevel="h3" />
              </Section>

              <Section id="features">
                <Card title="Key Features" titleLevel="h3">
                  <div className="features-grid">
                    <div className="feature-item">
                      <h4>🎨 Design System</h4>
                      <p>Consistent UI components with SCSS variables and responsive design.</p>
                    </div>
                    <div className="feature-item">
                      <h4>📱 Mobile First</h4>
                      <p>Responsive layout that adapts to different screen sizes and orientations.</p>
                    </div>
                    <div className="feature-item">
                      <h4>🧪 Well Tested</h4>
                      <p>Comprehensive test coverage with Vitest and Testing Library.</p>
                    </div>
                    <div className="feature-item">
                      <h4>⚡ Fast Build</h4>
                      <p>Vite for lightning-fast development and optimized production builds.</p>
                    </div>
                  </div>
                </Card>
              </Section>

              <Section id="responsive">
                <Card title="Responsive Behavior" titleLevel="h3">
                  <p>This layout demonstrates several responsive patterns:</p>
                  <ul>
                    <li><strong>Desktop (≥1024px):</strong> Sidebar on the left, main content on the right</li>
                    <li><strong>Tablet (768px-1023px):</strong> Sidebar moves below main content</li>
                    <li><strong>Mobile ({'<'}768px):</strong> Single column layout with stacked sections</li>
                    <li><strong>Landscape mode:</strong> Optimized for horizontal viewing on small screens</li>
                  </ul>

                  <div className="responsive-demo">
                    <div className="demo-box desktop-only">Desktop View</div>
                    <div className="demo-box tablet-only">Tablet View</div>
                    <div className="demo-box mobile-only">Mobile View</div>
                  </div>
                </Card>
              </Section>

              <Section id="about">
                <Card title="About This App" titleLevel="h3">
                  <p>This is a comprehensive demonstration of modern web development practices using Preact, TypeScript, and a robust design system.</p>

                  <h4>Architecture Highlights:</h4>
                  <ul>
                    <li><strong>Component-Driven:</strong> Modular UI components with TypeScript interfaces</li>
                    <li><strong>State Management:</strong> Zustand for lightweight, reactive state</li>
                    <li><strong>Styling:</strong> SCSS with design tokens and utility classes</li>
                    <li><strong>Testing:</strong> Unit tests for all components and hooks</li>
                    <li><strong>Build System:</strong> Vite with optimized production builds</li>
                    <li><strong>Type Safety:</strong> Full TypeScript coverage with strict mode</li>
                  </ul>

                  <h4>Performance Features:</h4>
                  <ul>
                    <li>Tree-shaking for minimal bundle size</li>
                    <li>Lazy loading and code splitting ready</li>
                    <li>Optimized CSS with design system variables</li>
                    <li>Modern ES modules with Vite HMR</li>
                  </ul>
                </Card>
              </Section>
            </Article>
          )}
        </Main>
      </div>

      <Footer>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
        <p>&copy; 2024 Akwamaryn App - Responsive Layout Demo</p>
      </Footer>
    </div>
  )
}