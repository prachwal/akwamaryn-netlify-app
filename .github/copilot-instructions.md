# Copilot Instructions for Akwamaryn Netlify App

## Architecture Overview

This is a **Preact + Vite + TypeScript** application with Zustand for state management. Note: This project uses **Preact**, not React, though the syntax is nearly identical.

### Key Tech Stack
- **Frontend**: Preact (not React) with TypeScript and SCSS
- **Build Tool**: Vite with custom config that outputs to `public/` directory
- **State Management**: Zustand stores (see `src/stores/`)
- **Testing**: Vitest + Testing Library + jsdom
- **Deployment**: Netlify (build outputs to `public/`)

## Project Structure Patterns

### Component Organization
- Components live in `src/components/` with co-located styles and tests
- Feature components go in `src/components/features/`
- Each component has its own folder: `ComponentName/ComponentName.tsx`, `ComponentName.scss`, `ComponentName.test.tsx`
- Use named exports: `export function ComponentName()` not default exports

### Store Pattern (Zustand)
```typescript
// Follow this pattern in src/stores/
export const useStoreName = create<StateInterface>((set) => ({
  // state properties
  // action methods that call set()
}))
```

### Import Organization
Imports follow a strict order enforced by ESLint:
1. External libraries
2. Internal modules (relative imports)
3. Blank line between groups

## Development Workflow

### Available Commands
- `npm run dev` - Start dev server
- `npm run test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI dashboard
- `npm run coverage` - Generate test coverage reports (outputs to `public/coverage/`)
- `npm run docs` - Generate TypeDoc documentation (outputs to `public/docs/`)
- `npm run lint` / `npm run lint:fix` - ESLint checking/fixing

### Testing Conventions
- Mock Zustand stores in tests using `vi.mock()`
- Mock global `__APP_VERSION__` variable in test setup
- Use Testing Library patterns: `screen.getByRole()`, `userEvent.setup()`
- Test files co-located with components, using `.test.tsx` suffix

### Global Variables
- `__APP_VERSION__` is injected by Vite from package.json version
- Must be declared in ESLint globals and mocked in tests

## Code Style & Conventions

### TypeScript Patterns
- Always define interfaces for component props (even if empty: `interface ComponentProps {}`)
- Prefix unused parameters with underscore: `function Component(_props: Props)`
- Use JSDoc comments for all components and exported functions
- Include `@example` blocks in JSDoc

### Component Structure
```typescript
/**
 * JSDoc description
 * @param props - Description
 * @returns Description
 * @example
 * ```tsx
 * <ComponentName />
 * ```
 */
export function ComponentName(_props: ComponentProps) {
  // component logic
}
```

### File Extensions
- Use `.tsx` for components (even without JSX)
- Use `.ts` for utilities and stores
- Use `.scss` for styles

## Build & Deployment Specifics

- Vite builds to `public/` directory (not typical `dist/`)
- Coverage reports and docs also output to `public/` subdirectories
- `public/index.html` exists but main entry is root `index.html`
- Uses modern SCSS compiler API in Vite config

## Testing Considerations
- Global test setup in `src/test/setup.ts` configures Testing Library and mocks
- Vitest runs in jsdom environment with globals enabled
- Store mocking pattern is critical for component testing