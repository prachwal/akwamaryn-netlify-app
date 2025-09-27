/// <reference types="vite/client" />

declare const __APP_VERSION__: string
declare const __PREACT_VERSION__: string
declare const __TYPESCRIPT_VERSION__: string
declare const __VITE_VERSION__: string
declare const __SCSS_VERSION__: string
declare const __VITEST_VERSION__: string

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}