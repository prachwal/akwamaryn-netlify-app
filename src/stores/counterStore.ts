import { create } from 'zustand'

/**
 * Interface for the counter store state
 */
export interface CounterState {
  /** Current count value */
  count: number
  /** Function to increment the count */
  increment: () => void
}

/**
 * Zustand store for counter functionality
 *
 * @returns The counter store with state and actions
 *
 * @example
 * ```ts
 * const { count, increment } = useCounterStore()
 * ```
 */
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))