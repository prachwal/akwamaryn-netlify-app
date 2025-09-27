/// <reference types="@testing-library/jest-dom" />
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/preact'
import * as matchers from '@testing-library/jest-dom/matchers'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Mock app version for tests
;(globalThis as unknown as { __APP_VERSION__: string }).__APP_VERSION__ = '0.0.1'

// Mock technology versions for tests
;(globalThis as unknown as { __PREACT_VERSION__: string }).__PREACT_VERSION__ = '10.27.2'
;(globalThis as unknown as { __TYPESCRIPT_VERSION__: string }).__TYPESCRIPT_VERSION__ = '5.9.2'
;(globalThis as unknown as { __VITE_VERSION__: string }).__VITE_VERSION__ = '7.1.7'
;(globalThis as unknown as { __SCSS_VERSION__: string }).__SCSS_VERSION__ = '1.93.2'
;(globalThis as unknown as { __VITEST_VERSION__: string }).__VITEST_VERSION__ = '3.2.4'

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})