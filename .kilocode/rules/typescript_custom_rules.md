# TypeScript Development Rules for Preact SPA Project

## Core TypeScript Principles

### Strict Type Safety

- **NEVER use `any` type** - it defeats the purpose of TypeScript
- Use `unknown` instead of `any` when the type is truly unknown
- Prefer type assertions with `as` only when absolutely necessary
- Enable strict compiler options in tsconfig.json
- Use `strict`, `noImplicitAny`, `strictNullChecks`, `noUnusedLocals`, `noUnusedParameters`

### Modern TypeScript Features

- Use `const` assertions for immutable data structures
- Leverage template literal types for string manipulation when needed
- Use utility types: `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T>`

## Type Definitions and Interfaces

### Interface vs Type Aliases

- Use `interface` for component props and state shapes
- Use `type` for unions and simple type transformations
- Use `interface` for extensible object shapes

```typescript
// Good: Interface for component props
interface AppProps {
  title: string;
  version: string;
}

// Good: Type for unions
type Theme = 'light' | 'dark';
```

### Naming Conventions

- Use PascalCase for types, interfaces, enums, and components
- Use camelCase for variables, functions, and methods
- Use SCREAMING_SNAKE_CASE for constants
- Prefix interfaces with descriptive names (avoid `I` prefix)

```typescript
// Good
interface ComponentProps {
  onClick: () => void;
}

const APP_VERSION = '1.0.0';
```

## Function and Method Signatures

### Function Types

- Always type function parameters and return values
- Use arrow functions for component event handlers
- Prefer explicit return types for exported functions

```typescript
// Good: Typed function
const handleClick = (event: MouseEvent): void => {
  console.log('Clicked');
};

// Good: Component with typed props
interface ButtonProps {
  onClick: (event: MouseEvent) => void;
  children: string;
}

const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
```

## Preact/React Specific Patterns

### Component Types

- Use functional components with typed props
- Use hooks with proper typing
- Type event handlers correctly

```typescript
import { useState } from 'preact/hooks';

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (): void => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

### JSX Types

- Ensure JSX elements are properly typed
- Use `JSX.Element` or `VNode` for return types when needed

## Module System and Imports

### Import/Export Patterns

- Use named exports by default
- Reserve default exports for main components
- Group imports by type (Preact, third-party, local)
- Use type-only imports for types: `import type { ComponentProps } from './types'`

```typescript
// Good: Organized imports
import { render } from 'preact';
import { useState } from 'preact/hooks';

import type { AppConfig } from './types';
import { Button } from './components/Button';
import './styles.css';
```

## Configuration and Setup

### tsconfig.json Requirements

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### ESLint Integration

- Use `@typescript-eslint/eslint-plugin` and `eslint-plugin-import`
- Enable `@typescript-eslint/no-explicit-any` as warning
- Use `import/order` for organized imports
- Enforce naming conventions with `@typescript-eslint/naming-convention`
- Require TSDoc comments with `jsdoc/require-description`

## Testing with TypeScript

### Test Type Safety

- Type all test data and mocks
- Use Vitest types for proper testing
- Test components with typed props

```typescript
import { render, screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    const handleClick = (): void => {};
    render(<Button onClick={handleClick}>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Performance and Optimization

### Type-Level Performance

- Use `interface` for object types
- Avoid unnecessary type complexity
- Use type-only imports to reduce bundle size

### Runtime Performance

- Use proper key props in lists
- Memoize expensive computations when needed
- Use `const` assertions for immutable data

## Documentation Requirements

### TSDoc Standards

- Add TSDoc comments to exported functions and components
- Include `@param` and `@returns` tags
- Use `@example` for usage examples

```typescript
/**
 * Renders the main application component
 *
 * @param props - Application properties
 * @param props.title - The application title
 * @param props.version - The application version
 * @returns The rendered application component
 *
 * @example
 * ```tsx
 * <App title="My App" version="1.0.0" />
 * ```
 */
interface AppProps {
  title: string;
  version: string;
}

const App = ({ title, version }: AppProps) => (
  <div>
    <h1>{title}</h1>
    <p>Version: {version}</p>
  </div>
);
```

## Code Review Guidelines

### TypeScript-Specific Checks

- Verify no `any` types are introduced (except in test mocks)
- Check for proper typing of component props and state
- Ensure functions have explicit return types
- Validate that imports are properly organized
- Confirm TSDoc comments are present for exported items
- Review for potential null/undefined issues
