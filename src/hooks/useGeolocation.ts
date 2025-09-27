import { useState, useEffect } from 'preact/hooks'
import type { GeolocationResponse } from '@mytypes/index'

/**
 * Hook for fetching geolocation data from Netlify Edge Function
 * @returns Object containing geolocation data, loading state, and error state
 */
export function useGeolocation() {
  const [data, setData] = useState<GeolocationResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/geolocation')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const geolocationData: GeolocationResponse = await response.json()
        setData(geolocationData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchGeolocation()
  }, [])

  return {
    data,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      setError(null)
      // Re-trigger the effect by updating a dependency
      setData(null)
    }
  }
}