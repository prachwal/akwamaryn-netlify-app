import { Card } from '@ui/Card';
import { useGeolocation } from '@hooks/useGeolocation';

import './GeolocationDisplay.scss';
import type { GeolocationDisplayProps } from './types';

/**
 * Component for displaying geolocation data
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <GeolocationDisplay title="Your Location" titleLevel="h3" />
 * ```
 */
export function GeolocationDisplay({
  title = 'Geolocation Data',
  titleLevel = 'h2',
  className,
  ...rest
}: GeolocationDisplayProps) {
  const { data, loading, error } = useGeolocation();

  return (
    <Card title={title} titleLevel={titleLevel} className={`geolocation-display ${className || ''}`} {...rest}>
      {loading && <p>Loading geolocation data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p><strong>City:</strong> {data.geo.city || 'Unknown'}</p>
          <p><strong>Country:</strong> {data.geo.country?.name || 'Unknown'} ({data.geo.country?.code || 'N/A'})</p>
          <p><strong>Subdivision:</strong> {data.geo.subdivision?.name || 'Unknown'} ({data.geo.subdivision?.code || 'N/A'})</p>
          {data.header && <p><strong>Header:</strong> {data.header}</p>}
        </div>
      )}
    </Card>
  );
}