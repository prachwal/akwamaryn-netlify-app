# Netlify Blobs API Reference

Essential Netlify Blobs API patterns for data storage in Netlify Functions.

## Basic Setup

```typescript
import { getStore, getDeployStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";
import { v4 as uuid } from "uuid";
```

## Store Operations

### Creating a Store

```typescript
// Basic store
const store = getStore("my-store");

// Store with options
const store = getStore({
  name: "my-store",
  consistency: "strong"
});

// Deploy-specific store (persists across deployments)
const deployStore = getDeployStore("deployment-data");
```

## Data Operations

### Storing Data

```typescript
// Store text
await store.set("my-key", "Hello, World!");

// Store JSON
await store.setJSON("user-123", {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
});

// Store with metadata
await store.set("my-key", data, {
  metadata: {
    contentType: "text/plain",
    source: "api",
    version: "1.0",
    createdAt: new Date().toISOString()
  }
});
```

### Retrieving Data

```typescript
// Get text data
const data = await store.get("my-key");
if (data === null) {
  return new Response("Data not found", { status: 404 });
}

// Get JSON data
const jsonData = await store.get("user-123", { type: "json" });
if (jsonData === null) {
  return new Response("User not found", { status: 404 });
}

// Get with metadata
const result = await store.getWithMetadata("my-key");
if (result === null) {
  return new Response("Data not found", { status: 404 });
}

const { data, metadata } = result;
```

### Deleting Data

```typescript
// Basic delete
await store.delete("my-key");

// Delete with verification
const exists = await store.get("my-key");
if (!exists) {
  return new Response("Data not found", { status: 404 });
}
await store.delete("my-key");
```

## Listing Operations

### List All Keys

```typescript
const { blobs } = await store.list();
const keys = blobs.map(blob => blob.key);
return Response.json({ keys, count: keys.length });
```

### List with Prefix Filter

```typescript
const { blobs } = await store.list({
  prefix: "user-123/"
});

const userFiles = blobs.map(blob => ({
  key: blob.key,
  size: blob.size,
  etag: blob.etag
}));
```

## File Upload Example

```typescript
export default async (req: Request, context: Context) => {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file) {
    return new Response('No file provided', { status: 400 });
  }

  const store = getStore("file-uploads");
  const fileId = uuid();
  const key = `uploads/${fileId}-${file.name}`;

  await store.set(key, file, {
    metadata: {
      filename: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString()
    }
  });

  return Response.json({
    message: 'File uploaded successfully',
    fileId: fileId,
    key: key
  });
};
```

## File Download Example

```typescript
export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const key = url.searchParams.get('key');

  if (!key) {
    return new Response('No key provided', { status: 400 });
  }

  const store = getStore("file-uploads");
  const result = await store.getWithMetadata(key);

  if (!result) {
    return new Response('File not found', { status: 404 });
  }

  const { data, metadata } = result;

  return new Response(data, {
    headers: {
      'Content-Type': metadata.type || 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${metadata.filename}"`
    }
  });
};
```

## Session/Cache Management

```typescript
export default async (req: Request, context: Context) => {
  const store = getStore("sessions");
  const sessionId = req.headers.get("session-id") || uuid();

  // Check for existing session
  const sessionData = await store.get(sessionId, { type: "json" });

  if (!sessionData) {
    // Create new session
    const newSession = {
      id: sessionId,
      createdAt: new Date().toISOString(),
      data: {}
    };

    await store.setJSON(sessionId, newSession, {
      metadata: {
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      }
    });

    return Response.json(newSession);
  }

  return Response.json(sessionData);
};
```

## Error Handling

```typescript
export default async (req: Request, context: Context) => {
  try {
    const store = getStore("my-store");
    const data = await store.get("my-key");

    if (data === null) {
      return new Response("Data not found", { status: 404 });
    }

    return new Response(data);
  } catch (error) {
    console.error('Blobs API error:', error);
    return new Response("Internal server error", { status: 500 });
  }
};
```

## Best Practices

- Use meaningful store names that reflect their purpose
- Include metadata for better data management and querying
- Handle null responses appropriately (data not found)
- Use deploy stores for data that should persist across deployments
- Implement proper error handling for all operations
- Consider data expiration for temporary/session data

For complete documentation, visit: <https://docs.netlify.com/blobs/overview/>
