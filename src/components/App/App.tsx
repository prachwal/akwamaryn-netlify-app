import './App.scss'
import { Counter } from '@components/features/Counter'

/**
 * Props for the App component
 */
interface AppProps {}

/**
 * Main application component
 *
 * @param props - Component props (currently empty)
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
      <main className="app-main">
        <header>
          <h1>Akwamaryn Netlify App</h1>
        </header>
        <section className="card">
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </section>
      </main>
      <footer>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
        <p>Version: {__APP_VERSION__}</p>
      </footer>
    </>
  )
}