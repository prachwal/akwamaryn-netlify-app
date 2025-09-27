/**
 * Geolocation data provided by Netlify Edge Functions
 */
export interface GeolocationData {
  /** City name */
  city?: string;
  /** Country information */
  country?: {
    /** ISO country code */
    code?: string;
    /** Full country name */
    name?: string;
  };
  /** Subdivision (state/province) information */
  subdivision?: {
    /** ISO subdivision code */
    code?: string;
    /** Full subdivision name */
    name?: string;
  };
}

/**
 * Response from the geolocation API endpoint
 */
export interface GeolocationResponse {
  /** Geolocation data */
  geo: GeolocationData;
  /** Raw geolocation header from Netlify */
  header: string | null;
}