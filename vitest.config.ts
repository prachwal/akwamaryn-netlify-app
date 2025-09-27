import { defineConfig } from 'vitest/config'
import baseConfig from './vite.config'

export default defineConfig({
  ...baseConfig,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './public/coverage',
    },
  },
})