# Netlify Functions Reference

Essential patterns for creating and deploying Netlify Functions in your project.

## Create Function File

Create a JavaScript or TypeScript file in your functions directory. Netlify will automatically detect and deploy functions from this directory.

```typescript
// netlify/functions/hello.ts
export default async (req: Request, context) => {
  return new Response("Hello, world!");
};
```

## Function Structure

Functions receive two parameters:

- `req`: Web platform `Request` object representing the incoming HTTP request
- `context`: Netlify-specific context object with metadata about the client and site

## Synchronous Functions

Return a `Response` object for immediate responses:

```typescript
export default async (req: Request, context) => {
  const data = await fetchSomeData();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## Background Functions

For long-running operations, use background functions (suffix `-background`):

```typescript
// netlify/functions/process-data-background.ts
export default async (req: Request, context) => {
  // Long-running task - no response needed
  await processLargeDataset();
  console.log("Processing complete");
};
```

Background functions return HTTP 202 (Accepted) immediately.

## Route Requests

Functions are automatically available at `/.netlify/functions/<FUNCTION_NAME>`.

Configure custom routes using the `config` export:

```typescript
export default async (req: Request, context) => {
  const { id } = context.params;
  return new Response(`User ID: ${id}`);
};

export const config = {
  path: "/api/users/:id"
};
```

## Multiple Paths

```typescript
export const config = {
  path: ["/api/users", "/api/profiles"]
};
```

## URL Patterns

Use URLPattern syntax for complex routing:

```typescript
export const config = {
  path: ["/api/posts/*", "/api/users/:id"]
};
```

## Environment Variables

Access environment variables via `Netlify.env`:

```typescript
export default async (req: Request, context) => {
  const apiKey = Netlify.env.get("API_KEY");
  const dbUrl = Netlify.env.get("DATABASE_URL");

  // Use variables...
};
```

## Runtime

- Node.js 18+ required (Fetch API support)
- ES modules preferred (`.js` with `"type": "module"` in package.json, or `.mjs`)
- Functions run in isolated environments with 10-second timeout (synchronous) or 15-minute timeout (background)

## Module Formats

- `.mjs`: Always ES modules
- `.cjs`: Always CommonJS
- `.js`: ES modules if package.json has `"type": "module"`, otherwise CommonJS

## Streaming Responses

Return ReadableStream for streaming data:

```typescript
export default async () => {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode("Starting...\n"));
      // Stream data...
      controller.close();
    }
  });

  return new Response(stream);
};
```

## Error Handling

```typescript
export default async (req: Request, context) => {
  try {
    const result = await riskyOperation();
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.error('Function error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
```

## Testing Locally

Use Netlify Dev for local testing:

```bash
npm install -g netlify-cli
netlify dev
```

Functions will be available at `http://localhost:8888/.netlify/functions/<name>`

## Lambda Compatibility

For AWS Lambda compatibility, use named `handler` export:

```typescript
export const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  };
};
```

## Best Practices

- Keep functions focused on single responsibilities
- Use appropriate function types (sync vs background)
- Handle errors gracefully
- Use environment variables for configuration
- Prefer ES modules
- Test functions locally before deployment

For complete documentation, visit: <https://docs.netlify.com/functions/overview/>
