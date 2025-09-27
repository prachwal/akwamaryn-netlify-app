import './App.scss'
import { Counter } from '@components/features/Counter'
import { GeolocationDisplay } from '@components/features/GeolocationDisplay'
import { Card, Header, Footer, Main, Article } from '@ui/index'

/**
 * Props for the App component
 */
export interface AppProps {
  /** No props currently defined */
}

/**
 * Main application component
 *
 * @param _props - Component props (currently empty)
 * @returns The main app JSX element
 *
 * @example
 * ```tsx
 * <App />
 * ```
 */
export function App(_props: AppProps) {
  return (
    <>
      <Header title="Akwamaryn Netlify App" />
      <Main className="app-main">
        <Article title="Welcome to Akwamaryn App">
          <Card>
            <Counter />
            <p>
              Edit <code>src/App/App.tsx</code> and save to test HMR
            </p>
          </Card>
          <GeolocationDisplay />  
        </Article>
      </Main>
      <Footer>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
        <p>Version: {__APP_VERSION__}</p>
      </Footer>
    </>
  )
}