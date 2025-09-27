import { useCounterStore } from '@stores/counterStore'

/**
 * Props for the Counter component
 */
export interface CounterProps {
  /** No props currently defined */
}

/**
 * Counter component that displays and increments a counter using Zustand store
 *
 * @param _props - Component props (currently empty)
 * @returns The counter JSX element
 *
 * @example
 * ```tsx
 * <Counter />
 * ```
 */
export function Counter(_props: CounterProps) {
  const { count, increment } = useCounterStore()

  return (
    <button onClick={increment}>
      count is {count}
    </button>
  )
}