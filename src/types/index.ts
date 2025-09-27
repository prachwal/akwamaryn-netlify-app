export * from '../../netlify/types'

/**
 * Application technology stack versions
 */
export const APP_VERSIONS = {
  preact: '10.27.2',
  typescript: '5.9.2',
  vite: '7.1.7',
  scss: '1.93.2',
  vitest: '3.2.4'
} as const

/**
 * Type for application versions
 */
export type AppVersions = typeof APP_VERSIONS