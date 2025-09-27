# Preact Development Rules

## Component Structure and Organization

### Component Files

- Use functional components by default, avoid class components unless absolutely necessary
- Each component should be in its own file with the same name as the component
- Use PascalCase for component names and file names
- Component files should have `.jsx` or `.tsx` extension

### File Organization

```text
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
└── styles/           # CSS/SCSS files
```

## Code Style and Formatting

### Import Organization

- Group imports in the following order:
  1. Preact/React imports
  2. Third-party library imports
  3. Internal imports (components, hooks, utils)
  4. Relative imports
- Use named imports when possible
- Always import `h` from 'preact' when using JSX without pragma

```javascript
import { render, Component } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact/router';

import Button from '../ui/Button';
import { formatDate } from '../../utils/date';

import './ComponentName.css';
```

### JSX Standards

- Use self-closing tags for components without children
- Use camelCase for HTML attributes (className, onClick, etc.)
- Prefer destructuring props in function parameters
- Use fragments (`<>...</>`) instead of unnecessary wrapper divs

### Props and State

- Always define PropTypes or use TypeScript for type checking
- Use descriptive names for props and state variables
- Prefer controlled components over uncontrolled ones
- Use custom hooks for complex state logic

## Preact-Specific Rules

### Bundle Size Optimization

- Import only what you need from preact/compat if using React libraries
- Use `preact/hooks` instead of importing from 'preact' for hooks
- Prefer smaller, Preact-native libraries over heavy React alternatives

### Performance Guidelines

- Use `memo()` for expensive components that render frequently
- Implement proper key props in lists
- Avoid inline functions in JSX when possible - extract to useCallback or define outside component
- Use `useMemo()` for expensive computations

### Preact/Compat Usage

- Only use preact/compat when integrating React-specific libraries
- Document why preact/compat is needed in comments
- Prefer native Preact alternatives when available

## Hooks Usage

### Custom Hooks

- Prefix all custom hooks with 'use'
- Custom hooks should be pure and reusable
- Place custom hooks in `src/hooks/` directory
- Each custom hook should have its own file

### Built-in Hooks Best Practices

- Use `useEffect` cleanup functions to prevent memory leaks
- Specify dependency arrays for all useEffect, useMemo, and useCallback
- Use `useReducer` for complex state logic instead of multiple useState calls

## Styling Guidelines

### CSS Organization

- Use CSS Modules or styled-components for component-specific styles
- Create a consistent naming convention (BEM recommended)
- Use CSS custom properties for theme variables
- Avoid inline styles except for dynamic values

### Responsive Design

- Use mobile-first approach
- Implement proper breakpoints
- Test components on different screen sizes
- Use relative units (rem, em, %) instead of fixed pixels

## Testing Requirements

### Component Testing

- Write unit tests for all components using Testing Library
- Test component behavior, not implementation details
- Include accessibility tests using jest-axe
- Mock external dependencies properly

### Test File Organization

- Place test files next to components with `.test.jsx` extension
- Use descriptive test names that explain the expected behavior
- Group related tests using describe blocks

## Accessibility Standards

### ARIA and Semantic HTML

- Use semantic HTML elements when possible
- Add proper ARIA labels and roles
- Ensure keyboard navigation works correctly
- Maintain proper heading hierarchy

### Focus Management

- Implement visible focus indicators
- Manage focus for modal dialogs and overlays
- Ensure tab order is logical

## Performance and Bundle Optimization

### Code Splitting

- Use dynamic imports for route-based code splitting
- Implement component-level lazy loading where appropriate
- Use `preact/compat` sparingly to keep bundle size small

### Asset Optimization

- Optimize images and use appropriate formats
- Implement lazy loading for images
- Use proper caching strategies

## Error Handling

### Error Boundaries

- Implement error boundaries for critical sections
- Provide meaningful error messages to users
- Log errors appropriately for debugging

### Validation

- Validate props using PropTypes or TypeScript
- Handle async operations with proper error states
- Implement form validation on both client and server side

## Documentation Requirements

### Component Documentation

- Add JSDoc comments for complex components
- Document props, their types, and default values
- Include usage examples in comments
- Document any side effects or special behaviors

### README Requirements

- Include setup and development instructions
- Document available scripts and their purposes
- List all major dependencies and their versions
- Include deployment instructions

## Security Guidelines

### XSS Prevention

- Always sanitize user input
- Use dangerouslySetInnerHTML sparingly and safely
- Validate data received from APIs
- Implement proper Content Security Policy

## Git and Development Workflow

### Commit Standards

- Use conventional commit messages
- Keep commits atomic and focused
- Include tests with feature commits
- Update documentation with changes

### Branch Naming

- Use descriptive branch names (feature/, bugfix/, hotfix/)
- Keep branches focused on single features or fixes
- Regularly sync with main branch

## Environment-Specific Rules

### Development

- Use Preact DevTools for debugging
- Enable detailed error messages
- Use hot reloading for better development experience

### Production

- Enable production optimizations
- Minimize bundle size
- Implement proper error logging
- Use performance monitoring

## Dependencies Management

### Package Selection

- Prefer lightweight, Preact-compatible packages
- Avoid packages that significantly increase bundle size
- Keep dependencies up to date
- Document reasoning for each major dependency

### Version Control

- Lock dependency versions in package-lock.json
- Regularly audit for security vulnerabilities
- Use exact versions for critical dependencies
