# Express on Netlify Reference

Deploy Express apps as Netlify Functions to create serverless REST APIs.

## Basic Setup

Install required dependencies:

```bash
npm i express serverless-http @netlify/functions @types/express
```

## Netlify Function with Express

Create a function file (e.g., `netlify/functions/api.ts`):

```typescript
import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.post("/data", (req, res) => res.json({ received: true }));

api.use("/api/", router);

export const handler = serverless(api);
```

## Netlify Configuration

Add to `netlify.toml`:

```toml
[functions]
  external_node_modules = ["express"]
  node_bundler = "esbuild"

[[redirects]]
  force = true
  from = "/api/*"
  status = 200
  to = "/.netlify/functions/api/:splat"
```

## Express Features in Netlify Functions

### Routing

```typescript
const router = Router();

// Basic routes
router.get("/users", (req, res) => res.json(users));
router.post("/users", (req, res) => {
  // Create user logic
  res.status(201).json(newUser);
});
router.put("/users/:id", (req, res) => {
  // Update user logic
  res.json(updatedUser);
});
router.delete("/users/:id", (req, res) => {
  // Delete user logic
  res.status(204).send();
});

// Route parameters
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  // Find user by id
  res.json(user);
});

// Query parameters
router.get("/search", (req, res) => {
  const { q, limit = 10 } = req.query;
  // Search logic
  res.json(results);
});
```

### Middleware

```typescript
// JSON parsing
api.use(express.json());

// CORS
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  // Verify token logic
  next();
};

// Apply to specific routes
router.use('/protected', authenticate);
```

### Error Handling

```typescript
// Error handling middleware
api.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
api.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
```

## Complete Example

```typescript
import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();

// Middleware
api.use(express.json());
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
router.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

router.get("/users", (req, res) => {
  // Get users logic
  res.json({ users: [] });
});

router.post("/users", (req, res) => {
  const { name, email } = req.body;
  // Create user logic
  res.status(201).json({ id: 1, name, email });
});

// Mount router
api.use("/api/", router);

// Error handling
api.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

api.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

export const handler = serverless(api);
```

## Limitations

- All Netlify Functions limitations apply (execution time, memory)
- Not recommended for background or scheduled functions
- Cold start latency for infrequently used routes

For complete documentation, visit: <https://docs.netlify.com/integrations/frameworks/express/>
