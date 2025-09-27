import { useState } from 'preact/hooks'
import './App.scss'

/**
 * Main application component
 * @returns The main app JSX element
 */
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app-main">
        <header>
          <h1>Akwamaryn Netlify App</h1>
        </header>
        <section className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
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