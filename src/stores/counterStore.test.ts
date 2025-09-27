import { describe, it, expect } from 'vitest'

import { useCounterStore } from './counterStore'

describe('useCounterStore', () => {
  it('should initialize with count 0', () => {
    const { count } = useCounterStore.getState()
    expect(count).toBe(0)
  })

  it('should increment count', () => {
    const store = useCounterStore.getState()
    store.increment()
    expect(useCounterStore.getState().count).toBe(1)
  })
})