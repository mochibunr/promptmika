# API Integration Patterns

## Philosophy

Every API call is a contract. Define the contract clearly, handle failures gracefully, cache aggressively, and validate everything. The network is unreliable — your app should not be.

---

## REST API Patterns

### Request Structure

```
[METHOD] [baseURL]/[resource]
Headers: Authorization, Content-Type, Accept
Body: JSON (for POST/PUT/PATCH)
Query: filters, pagination, sorting
```

### Standard Endpoints

| Operation | Method | Endpoint | Response |
|-----------|--------|----------|----------|
| List | GET | `/users?page=1&limit=20` | `{ data: [...], meta: { page, total } }` |
| Get one | GET | `/users/:id` | `{ data: { ... } }` |
| Create | POST | `/users` | `{ data: { ... } }` (201) |
| Update | PATCH | `/users/:id` | `{ data: { ... } }` |
| Delete | DELETE | `/users/:id` | `{ data: null }` (204) |
| Bulk | POST | `/users/bulk` | `{ data: [...], errors: [...] }` |

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "message": "Required" }
    ]
  }
}
```

### HTTP Status Codes

| Code | Meaning | Use When |
|------|---------|----------|
| 200 | OK | Successful GET, PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Missing or invalid auth |
| 403 | Forbidden | Valid auth, insufficient permissions |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Duplicate resource, version conflict |
| 422 | Unprocessable | Valid JSON, invalid data |
| 429 | Too Many Requests | Rate limit hit |
| 500 | Server Error | Unexpected failure |
| 503 | Unavailable | Maintenance or overload |

### Pagination

Offset-based:

```
GET /users?page=2&limit=20
Response: { data: [...], meta: { page: 2, limit: 20, total: 156, pages: 8 } }
```

Cursor-based (preferred for large datasets):

```
GET /users?cursor=abc123&limit=20
Response: { data: [...], meta: { next_cursor: "def456", has_more: true } }
```

### Filtering and Sorting

```
GET /users?status=active&sort=-created_at&fields=id,name,email
```

Rules:

- Use query params for filtering, not path params.
- Support multiple sort fields: `?sort=name,-created_at`.
- Support field selection: `?fields=id,name,email`.
- Default to sensible sort (most recent first).
- Always paginate — never return unbounded lists.

---

## GraphQL Patterns

### Query Structure

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      edges {
        node {
          id
          title
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

### Mutation Pattern

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      name
      email
    }
    errors {
      field
      message
    }
  }
}
```

### Rules

- Use fragments for reusable field sets.
- Use variables for all dynamic values — never interpolate strings.
- Request only needed fields — no over-fetching.
- Use pagination (cursor-based) for list fields.
- Handle errors in `errors` array, not just HTTP status.
- Use `@skip` and `@include` for conditional fields.
- Cache with normalized cache (Apollo, Relay) or urql.

### N+1 Prevention

Use DataLoader for batched, cached database queries:

```javascript
const userLoader = new DataLoader(async (ids) => {
  const users = await db.users.findByIds(ids);
  return ids.map(id => users.find(u => u.id === id));
});
```

---

## WebSocket Patterns

### Connection Lifecycle

```
Connect → Authenticate → Subscribe → Receive events → Handle errors → Reconnect
```

### Message Format

```json
{
  "type": "message",
  "channel": "room:123",
  "payload": { "text": "Hello" },
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### Event Types

| Event | Direction | Purpose |
|-------|-----------|---------|
| `connect` | Client → Server | Establish connection |
| `auth` | Client → Server | Authenticate |
| `subscribe` | Client → Server | Join a channel |
| `unsubscribe` | Client → Server | Leave a channel |
| `message` | Bidirectional | Send/receive data |
| `ping` / `pong` | Bidirectional | Keepalive |
| `error` | Server → Client | Error notification |
| `disconnect` | Either | Connection closed |

### Reconnection Strategy

```
Attempt 1: 1 second
Attempt 2: 2 seconds
Attempt 3: 4 seconds
Attempt 4: 8 seconds
Attempt 5+: 30 seconds (cap)
```

Rules:

- Exponential backoff with jitter.
- Reset backoff on successful connection.
- Queue messages during disconnection, send on reconnect.
- Use heartbeat/ping to detect dead connections.
- Handle token expiry mid-connection — re-authenticate without full reconnect.

### Presence Pattern

```json
{
  "type": "presence",
  "users": [
    { "id": "user1", "status": "online", "last_seen": "..." }
  ]
}
```

---

## Server-Sent Events (SSE)

Use when: server pushes updates to client, unidirectional, simple setup.

```javascript
const eventSource = new EventSource('/api/events');

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // handle update
};

eventSource.onerror = () => {
  // reconnect logic (EventSource auto-reconnects)
};
```

Rules:

- Use for read-heavy push (notifications, live feeds, progress updates).
- Do not use for bidirectional communication — use WebSocket.
- Set `Last-Event-ID` header for reconnection.
- Handle connection state in UI (connected/disconnected/reconnecting).

---

## gRPC Patterns

### Service Definition

```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
  rpc CreateUser (CreateUserRequest) returns (User);
}
```

### Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Unary | Single request/response | `GetUser`, `CreateUser` |
| Server streaming | Large result set | `ListUsers` |
| Client streaming | Upload/batch | `BulkCreate` |
| Bidirectional streaming | Real-time chat | `Chat` |

### Rules

- Use protobuf for schema definition.
- Use metadata for auth (not body).
- Use status codes (NOT_FOUND, INVALID_ARGUMENT, etc.).
- Use deadline/timeout on every call.
- Use interceptors for logging, auth, retry.

---

## Error Handling Patterns

### Retry Strategy

```
Attempt 1: immediate
Attempt 2: 1 second delay
Attempt 3: 2 seconds delay
Attempt 4+: 4 seconds delay (cap at 3 retries)
```

Rules:

- Retry only on: 429, 500, 502, 503, 504.
- Do not retry on: 400, 401, 403, 404, 409, 422.
- Use exponential backoff with jitter.
- Cap retries at 3-5 attempts.
- Use circuit breaker for repeated failures.

### Circuit Breaker

```
Closed (normal) → Open (failing, reject all) → Half-Open (test one request)
```

- Open after 5 consecutive failures.
- Half-open after 30 seconds.
- Close after 1 successful request.

### Timeout Rules

| Operation | Timeout |
|-----------|---------|
| Auth | 5 seconds |
| CRUD | 10 seconds |
| Search | 15 seconds |
| File upload | 60 seconds |
| Report generation | 120 seconds |

---

## Caching Patterns

### Client-Side Cache

```
Cache-Control: max-age=300 (5 minutes)
ETag: "abc123"
If-None-Match: "abc123" → 304 Not Modified
```

### Cache Invalidation

| Strategy | Use When | Example |
|----------|----------|---------|
| Time-based | Data changes infrequently | Cache for 5 minutes |
| Event-based | Data changes on user action | Invalidate on mutation |
| Version-based | API versioning | `ETag` / `Last-Modified` |
| Manual | User-triggered refresh | Pull-to-refresh |

### Rules

- Cache reads, invalidate on writes.
- Use stale-while-revalidate for better UX.
- Show cached data immediately, refresh in background.
- Never cache: auth responses, error responses, real-time data.

---

## Authentication Patterns

### Token-Based Auth

```
Authorization: Bearer <jwt_token>
```

### Refresh Flow

```
Access token expires → 401 → Use refresh token → Get new access token → Retry original request
```

Rules:

- Store access token in memory (not localStorage for XSS-prone apps).
- Store refresh token in httpOnly cookie.
- Rotate refresh tokens on use.
- Implement token revocation on logout.
- Use short-lived access tokens (15 minutes).

### API Key Pattern

```
X-API-Key: <api_key>
```

Rules:

- Never expose API keys in client-side code.
- Use backend proxy for API key calls.
- Rotate keys periodically.
- Scope keys to minimum required permissions.

---

## Universal Rules

1. **Validate all input** — client and server side.
2. **Handle every error** — never let a promise reject unhandled.
3. **Set timeouts** — every network call needs a timeout.
4. **Log requests** — method, URL, status, duration.
5. **Use HTTPS** — always, everywhere.
6. **Compress responses** — gzip/brotli for large payloads.
7. **Paginate lists** — never return unbounded results.
8. **Version your API** — `/v1/`, `/v2/`.
9. **Document your API** — OpenAPI/Swagger for REST, SDL for GraphQL.
10. **Monitor and alert** — track error rates, latency, throughput.
