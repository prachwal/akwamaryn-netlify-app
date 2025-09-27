import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { useGeolocation } from '@hooks/useGeolocation';

import { GeolocationDisplay } from './GeolocationDisplay';

// Mock the useGeolocation hook
vi.mock('@hooks/useGeolocation', () => ({
  useGeolocation: vi.fn(),
}));
const mockUseGeolocation = vi.mocked(useGeolocation);

describe('GeolocationDisplay', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state', () => {
    mockUseGeolocation.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay />);
    expect(screen.getByText('Loading geolocation data...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseGeolocation.mockReturnValue({
      data: null,
      loading: false,
      error: 'Network error',
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay />);
    expect(screen.getByText('Error: Network error')).toBeInTheDocument();
  });

  it('renders geolocation data', () => {
    const mockData = {
      geo: {
        city: 'Warsaw',
        country: { name: 'Poland', code: 'PL' },
        subdivision: { name: 'Mazowieckie', code: 'MZ' },
      },
      header: 'test-header',
    };

    mockUseGeolocation.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay />);
    expect(screen.getByText('City:')).toBeInTheDocument();
    expect(screen.getByText(/Warsaw/)).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText(/Poland/)).toBeInTheDocument();
    expect(screen.getByText(/\bPL\b/)).toBeInTheDocument();
    expect(screen.getByText('Subdivision:')).toBeInTheDocument();
    expect(screen.getByText(/Mazowieckie/)).toBeInTheDocument();
    expect(screen.getByText(/\bMZ\b/)).toBeInTheDocument();
    expect(screen.getByText('Header:')).toBeInTheDocument();
    expect(screen.getByText(/test-header/)).toBeInTheDocument();
  });

  it('renders unknown values when data is missing', () => {
    const mockData = {
      geo: {
        city: undefined,
        country: undefined,
        subdivision: undefined,
      },
      header: null,
    };

    mockUseGeolocation.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay />);
    expect(screen.getByText('City:')).toBeInTheDocument();
    expect(screen.getAllByText(/Unknown/)).toHaveLength(3);
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getAllByText(/\bN\/A\b/)).toHaveLength(2);
    expect(screen.getByText('Subdivision:')).toBeInTheDocument();
    expect(screen.queryByText('Header:')).not.toBeInTheDocument();
  });

  it('renders with default title', () => {
    mockUseGeolocation.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Geolocation Data');
  });

  it('renders with custom title and titleLevel', () => {
    mockUseGeolocation.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay title="Custom Title" titleLevel="h3" />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Custom Title');
  });

  it('passes additional props to Card', () => {
    mockUseGeolocation.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: vi.fn(),
    });

    render(<GeolocationDisplay data-testid="geo-display" />);
    expect(screen.getByTestId('geo-display')).toBeInTheDocument();
  });
});