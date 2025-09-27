import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/preact'
import * as matchers from '@testing-library/jest-dom/matchers'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Mock app version for tests
;(global as any).__APP_VERSION__ = '0.0.1'

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})