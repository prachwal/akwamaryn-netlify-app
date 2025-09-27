import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/preact'

import { useGeolocation } from './useGeolocation'

// Mock fetch globally
const fetchMock = vi.fn()
global.fetch = fetchMock

describe('useGeolocation', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch geolocation data successfully', async () => {
    const mockResponse = {
      geo: {
        city: 'Warsaw',
        country: {
          code: 'PL',
          name: 'Poland'
        },
        subdivision: {
          code: 'MZ',
          name: 'Mazowieckie'
        }
      },
      header: 'PL,MZ,Warsaw'
    }

    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })

    const { result } = renderHook(() => useGeolocation())

    expect(result.current.loading).toBe(true)
    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe(null)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockResponse)
    expect(result.current.error).toBe(null)
    expect(fetchMock).toHaveBeenCalledWith('/api/geolocation')
  })

  it('should handle fetch error', async () => {
    const errorMessage = 'Network error'
    fetchMock.mockRejectedValueOnce(new Error(errorMessage))

    const { result } = renderHook(() => useGeolocation())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe(errorMessage)
  })

  it('should handle HTTP error', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500
    })

    const { result } = renderHook(() => useGeolocation())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe('HTTP error! status: 500')
  })

  it('should handle unknown error', async () => {
    fetchMock.mockRejectedValueOnce('Unknown error')

    const { result } = renderHook(() => useGeolocation())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe('Unknown error occurred')
  })
})