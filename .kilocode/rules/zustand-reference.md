# Zustand Reference

Small, fast and scalable state-management solution using simplified flux principles. Used in this project for managing application state.

## Basic Usage

```typescript
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

## Component Usage

```typescript
function Counter() {
  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

## State Selection

```typescript
// Single property
const count = useStore((state) => state.count)

// Multiple properties with shallow comparison
import { useShallow } from 'zustand/react/shallow'

const { count, increment } = useStore(
  useShallow((state) => ({ count: state.count, increment: state.increment }))
)
```

## Async Actions

```typescript
const useStore = create((set) => ({
  data: null,
  loading: false,
  fetchData: async () => {
    set({ loading: true })
    const response = await fetch('/api/data')
    const data = await response.json()
    set({ data, loading: false })
  },
}))
```

## Middleware

### Persist (localStorage/sessionStorage)

```typescript
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set({ count: get().count + 1 }),
    }),
    {
      name: 'counter-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
```

### DevTools

```typescript
import { devtools } from 'zustand/middleware'

const useStore = create(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  }), { name: 'Counter Store' })
)
```

## TypeScript

```typescript
interface StoreState {
  count: number
  increment: () => void
  decrement: () => void
}

const useStore = create<StoreState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

## Non-React Usage

```typescript
import { createStore } from 'zustand/vanilla'

const store = createStore((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))

const { getState, setState, subscribe } = store
```

## Best Practices

- Keep stores focused on specific domains
- Use selectors to prevent unnecessary re-renders
- Prefer functional updates for state changes
- Use middleware for cross-cutting concerns (persistence, devtools)
- Test stores in isolation

For full documentation, visit: <https://zustand.docs.pmnd.rs/>
