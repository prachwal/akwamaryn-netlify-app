import './App.scss'
import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso'
import { Layout } from '@components/Layout'

// Import page components
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import { Responsive } from './pages/Responsive'
import { About } from './pages/About'
import { Settings } from './pages/Settings'

/**
 * Props for the App component
 */
export interface AppProps {
  /** No props currently defined */
}

/**
 * Main application component with preact-iso routing
 *
 * @param _props - Component props (currently empty)
 * @returns The main app JSX element with routing
 *
 * @example
 * ```tsx
 * <App />
 * ```
 */
export function App(_props: AppProps) {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Layout>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/responsive" component={Responsive} />
            <Route path="/about" component={About} />
            <Route path="/settings" component={Settings} />
          </Router>
        </Layout>
      </ErrorBoundary>
    </LocationProvider>
  )
}