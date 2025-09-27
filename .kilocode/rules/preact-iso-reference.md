# Preact ISO Reference

Isomorphic async tools for Preact routing and lazy loading. Used in this project for client-side routing with code splitting.

## Basic Routing Setup

```typescript
import { lazy, LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso';

// Synchronous component
import Home from './routes/home.js';

// Asynchronous (code-split) components
const Profiles = lazy(() => import('./routes/profiles.js'));
const Profile = lazy(() => import('./routes/profile.js'));
const NotFound = lazy(() => import('./routes/_404.js'));

const App = () => (
 <LocationProvider>
  <ErrorBoundary>
   <Router>
    <Home path="/" />
    <Route path="/profiles" component={Profiles} />
    <Route path="/profile/:id" component={Profile} />
    <NotFound default />
   </Router>
  </ErrorBoundary>
 </LocationProvider>
);
```

## Route Definition Patterns

### Direct Component Props

```typescript
<Home path="/" />
<Profiles path="/profiles" />
<Profile path="/profile/:id" />
<NotFound default />
```

### Route Component (Better TypeScript Support)

```typescript
<Route path="/" component={Home} />
<Route path="/profiles" component={Profiles} />
<Route path="/profile/:id" component={Profile} />
<NotFound default />
```

## Path Matching

- `:param` - Required parameter: `/profile/:id` matches `/profile/123`
- `:param?` - Optional parameter: `/profile/:id?` matches `/profile` and `/profile/123`
- `:param*` - Zero or more segments: `/profile/:id*` matches `/profile`, `/profile/123`, `/profile/123/abc`
- `:param+` - One or more segments: `/profile/:id+` matches `/profile/123`, `/profile/123/abc`
- `*` - Wildcard: `/profile/*` matches `/profile/123`, `/profile/123/abc`, etc.

## Hooks

### useLocation

Access current location information:

```typescript
import { useLocation } from 'preact-iso';

function MyComponent() {
  const { url, path, query, route } = useLocation();

  // url: current path + search params
  // path: current path only
  // query: parsed query parameters object
  // route: function to navigate programmatically
}
```

### useRoute

Access current route parameters (only works within Router):

```typescript
import { useRoute } from 'preact-iso';

function Profile() {
  const { path, query, params } = useRoute();

  // path: current path
  // query: query parameters
  // params: route parameters (e.g., { id: '123' } for /profile/:id)
}
```

## Lazy Loading

```typescript
import { lazy } from 'preact-iso';

// Default export
const Profile = lazy(() => import('./routes/profile.js'));

// Named export
const Profiles = lazy(() => import('./routes/profiles.js').then(m => m.Profiles));

// Preload on hover/focus
function Home() {
  return (
    <a href="/profile/rschristian" onMouseOver={() => Profile.preload()}>
      Profile Page
    </a>
  );
}
```

## Error Boundaries

```typescript
import { ErrorBoundary } from 'preact-iso';

const App = () => (
 <LocationProvider>
  <ErrorBoundary onError={(error) => console.error(error)}>
   <Router>
    {/* routes */}
   </Router>
  </ErrorBoundary>
 </LocationProvider>
);
```

## Prerendering (for SSR/Static Generation)

```typescript
import { prerender } from 'preact-iso';

const App = () => (
 <LocationProvider>
  <ErrorBoundary>
   <Router>
    {/* routes */}
   </Router>
  </ErrorBoundary>
 </LocationProvider>
);

// In prerendering context
export async function prerender(data) {
 return await prerender(<App />);
}
```

## Hydration

```typescript
import { hydrate } from 'preact-iso';

const App = () => (
 <div class="app">
  {/* app content */}
 </div>
);

// Client-side hydration
hydrate(<App />);
```

## Router Props

```typescript
<Router
 onRouteChange={(url) => console.log('Route changed to', url)}
 onLoadStart={(url) => console.log('Starting to load', url)}
 onLoadEnd={(url) => console.log('Finished loading', url)}
>
 {/* routes */}
</Router>
```

## LocationProvider Props

```typescript
<LocationProvider scope="/app">
 {/* Only routes starting with /app will be handled by the router */}
</LocationProvider>
```

For full documentation, visit: <https://github.com/preactjs/preact-iso>
