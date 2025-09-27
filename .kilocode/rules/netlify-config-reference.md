# Netlify Configuration Reference

Essential Netlify configuration options for this project. The `netlify.toml` file configures build settings, redirects, headers, and functions for Netlify deployment.

## File Location

The `netlify.toml` file is stored in the root of the repository.

## Build Settings

```toml
[build]
  # Base directory (where package.json is located)
  base = "."

  # Directory to publish (build output)
  publish = "dist"

  # Build command
  command = "npm run build"

  # Build environment variables
  [build.environment]
    NODE_VERSION = "20"
    NPM_VERSION = "10"
```

## Environment Variables

Environment variables can be set in different contexts:

```toml
# Production environment
[context.production.environment]
  NODE_ENV = "production"

# Deploy previews
[context.deploy-preview.environment]
  NODE_ENV = "development"

# Branch deploys
[context.branch-deploy.environment]
  NODE_ENV = "development"

# Local development
[context.dev.environment]
  NODE_ENV = "development"
```

## Redirects

### SPA Routing (Essential for client-side routing)

```toml
# Handle client-side routing - must be last redirect rule
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### API Proxies

```toml
# Proxy API calls to external services
[[redirects]]
  from = "/api/*"
  to = "https://api.example.com/:splat"
  status = 200
```

### Custom Redirects

```toml
# Permanent redirects
[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301

# Temporary redirects
[[redirects]]
  from = "/temporary"
  to = "/new-location"
  status = 302
```

## Headers

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

    # Security headers
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'"

    # Cache control for static assets
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "/api/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET, POST, PUT, DELETE"
    Access-Control-Allow-Headers = "Content-Type, Authorization"
```

## Functions Configuration

```toml
[functions]
  # Directory containing functions
  directory = "netlify/functions"

  # Node.js version for functions
  node_bundler = "esbuild"

  # External dependencies (not bundled)
  external_node_modules = ["some-native-module"]
```

## Edge Functions

```toml
[[edge_functions]]
  function = "auth"
  path = "/api/auth"

[[edge_functions]]
  function = "redirects"
  path = "/*"
```

## Build Plugins

```toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"

  [plugins.inputs]
    output_path = "reports/lighthouse.html"
```

## Deploy Contexts

Different settings for different deployment types:

```toml
# Production builds
[context.production]
  command = "npm run build:prod"
  publish = "dist"

# Deploy previews (PRs)
[context.deploy-preview]
  command = "npm run build:preview"
  publish = "dist"

# Branch deploys
[context.branch-deploy]
  command = "npm run build:staging"
  publish = "dist"
```

## Complete Example for This Project

```toml
[build]
  base = "."
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "20"

[context.production.environment]
  NODE_ENV = "production"

[context.deploy-preview.environment]
  NODE_ENV = "development"

[context.branch-deploy.environment]
  NODE_ENV = "development"

[context.dev.environment]
  NODE_ENV = "development"

# SPA routing support
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"
```

## Important Notes

- Settings in `netlify.toml` override UI settings
- Paths are relative to the base directory
- Environment variables set in UI take precedence over TOML for security
- Use `_headers` and `_redirects` files for deploy-specific rules
- Functions are automatically discovered in the specified directory

For complete documentation, visit: <https://docs.netlify.com/configure-builds/file-based-configuration/>
