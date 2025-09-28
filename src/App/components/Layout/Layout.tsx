import './Layout.scss'
import { useState } from 'preact/hooks'
import { Header, Footer, Main, Aside } from '@ui/index'

import { AppHeader } from './AppHeader'
import { MobileMenu } from './MobileMenu'
import { Sidebar } from './Sidebar'
import { DefaultContent } from './DefaultContent'

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
        <AppHeader
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />
      </Header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
      />

      <div className="app-content">
        <Aside className="sidebar">
          <Sidebar />
        </Aside>

        <Main className="app-main">
          {children || <DefaultContent />}
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