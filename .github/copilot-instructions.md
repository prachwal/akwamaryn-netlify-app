# Copilot Instructions for Akwamaryn Netlify App

## Architecture Overview

This is a **Preact + Vite + TypeScript** application with Zustand for state management. Note: This project uses **Preact**, not React, though the syntax is nearly identical.

### Key Tech Stack
- **Frontend**: Preact (not React) with TypeScript and SCSS
- **Build Tool**: Vite with custom config and path aliases
- **State Management**: Zustand stores (see `src/stores/`)
- **Testing**: Vitest + Testing Library + jsdom
- **UI System**: Custom component library in `src/UI/`

## Project Structure & Patterns

### Component Architecture
- **App Layer**: Main application in `src/App/` with layout and features
- **UI System**: Reusable components in `src/UI/` - semantic HTML elements (Header, Main, Article, Section, Aside, Nav, Footer, Card, Hamburger)
- **Feature Components**: Domain-specific components in `src/App/components/features/`
- **Barrel Exports**: Use `src/UI/index.ts` for importing multiple UI components

### Component Structure Pattern
Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx    # Component logic
├── ComponentName.scss   # Component styles  
├── ComponentName.test.tsx # Unit tests
├── types.ts            # TypeScript interfaces
└── index.ts            # Barrel export
```

### Responsive Layout System
- Uses CSS Grid and Flexbox with mobile-first approach
- **Breakpoints**: `$small: 480px`, `$tablet: 768px`, `$desktop: 1024px`
- **Layout Pattern**: Desktop has sidebar + main, tablet/mobile stack vertically with hamburger menu
- **Fluid Typography**: Uses `clamp()` for responsive font sizes
- **Mobile Menu**: Slide-in sidebar with overlay, managed by React state

### State Management (Zustand)
```typescript
// Follow this pattern in src/stores/
export const useStoreName = create<StateInterface>((set) => ({
  // state properties
  // action methods that call set()
}))
```

### Path Aliases (Vite + TypeScript)
- `@/` → `src/`
- `@components/` → `src/App/components/`
- `@ui/` → `src/UI/`
- `@stores/` → `src/stores/`
- `@hooks/` → `src/hooks/`

### Import Organization
Strict ESLint-enforced order:
1. External libraries
2. Internal modules (using path aliases)
3. Relative imports
4. Blank line between groups

## Development Workflow

### Essential Commands
- `npm run dev` - Dev server with HMR
- `npm run build` - Production build (outputs to `dist/`)
- `npm test` - Tests in watch mode
- `npm run test:ui` - Visual test dashboard
- `npm run coverage` - Coverage reports to `public/coverage/`
- `npm run lint:fix` - Auto-fix linting issues

### Testing Conventions
- Co-located tests using `.test.tsx` suffix
- Mock Zustand stores: `vi.mock('@stores/storeName')`
- Mock global `__APP_VERSION__` in test setup
- Use Testing Library patterns: `screen.getByRole()`, `userEvent.setup()`
- Global test setup in `src/test/setup.ts`

## Code Style & Critical Patterns

### TypeScript Patterns
- Always define interfaces for props (even if empty)
- Prefix unused parameters with underscore: `_props`
- JSDoc comments required for all exported functions with `@example` blocks
- Use `ComponentChildren` from 'preact' for child props

### Component Pattern
```typescript
/**
 * Component description
 * @param props - Props description
 * @returns JSX element
 * @example
 * ```tsx
 * <ComponentName className="custom" />
 * ```
 */
export function ComponentName({ className, ...rest }: ComponentProps) {
  return <element className={`base-class ${className || ''}`} {...rest} />
}
```

### SCSS Patterns
- Use `@use '../index.scss' as *;` for design system variables
- Responsive queries: mobile-first with min-width
- Color functions: `color.scale()`, `color.change()` from Sass
- CSS custom properties for theme variables
- BEM-like class naming for components

### Critical Global Variables
- `__APP_VERSION__` injected by Vite from package.json
- Must be declared in vite-env.d.ts and mocked in tests

## Key Files & Integration Points
- `src/index.scss` - Global styles and design system variables
- `src/UI/index.ts` - UI component barrel export
- `vite.config.ts` - Path aliases and build configuration
- `src/test/setup.ts` - Global test configuration
- `src/App/App.scss` - Main responsive layout system