# State Management Patterns

## Philosophy

State is the single source of truth for your application's data. Bad state management causes bugs that are hard to reproduce, hard to debug, and hard to fix. Choose the right pattern for your app's complexity, then apply it consistently.

---

## Pattern Selection Guide

| App Complexity | Recommended Pattern | Example |
|----------------|---------------------|---------|
| Simple (forms, toggles) | Local state | `useState`, component state |
| Medium (multi-component shared state) | External store | Zustand, Jotai |
| Complex (many entities, async, derived state) | Centralized store | Redux, Pinia |
| Very complex (nested async, optimistic updates, undo/redo) | Event-sourced store | Redux + Redux-Saga, XState |
| Real-time (collaborative, multi-user) | CRDT or operational transform | Yjs, Automerge |

---

## Local State (useState / ref)

Use when: state is local to one component, no sharing needed.

Pattern:

```javascript
const [value, setValue] = useState(initialValue);
```

Rules:

- Do not lift state to parent unless multiple children need it.
- Do not put derived data in state — compute it during render.
- Do not store DOM elements, timers, or subscriptions in state.

Anti-patterns:

- Lifting state too early ("maybe other components will need this")
- Storing derived values ("I'll keep a filteredList in state")
- Mutating state directly ("state.count++")

---

## External Store (Zustand / Jotai / Recoil)

Use when: multiple components need shared state, but the state graph is flat or shallow.

### Zustand

Pattern:

```javascript
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
```

Rules:

- Keep slices small and focused.
- Use selectors to avoid unnecessary re-renders: `const count = useStore((s) => s.count)`.
- Do not nest state deeply — flatten it.
- Use middleware for persistence, devtools, immutability checks.

### Jotai

Pattern:

```javascript
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);
```

Rules:

- Use atoms for individual pieces of state.
- Use derived atoms for computed values.
- Use write atoms for complex updates.
- Best for state that is naturally independent.

---

## Centralized Store (Redux / Pinia / Vuex)

Use when: state is complex, many entities, async operations, needs middleware, undo/redo, time-travel debugging.

### Redux (with Redux Toolkit)

Pattern:

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
```

Rules:

- Use Redux Toolkit (RTK) — never write Redux boilerplate by hand.
- Use slices for feature-based organization.
- Use selectors for derived data: `const value = useSelector((s) => s.counter.value)`.
- Use thunks for async; sagas only for complex async flows.
- Normalize nested data with `createEntityAdapter`.

### Pinia

Pattern:

```javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { double: (state) => state.count * 2 },
  actions: { increment() { this.count++; } },
});
```

Rules:

- One store per feature.
- Use getters for derived state.
- Use actions for mutations.
- Use `$subscribe` for side effects.

---

## State Machines (XState / Robot)

Use when: state transitions are complex, many states, conditional transitions, visual debugging needed.

Pattern:

```javascript
import { createMachine, interpret } from 'xstate';

const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  states: {
    idle: { on: { FETCH: 'loading' } },
    loading: {
      on: { SUCCESS: 'success', FAILURE: 'failure' },
    },
    success: { type: 'final' },
    failure: { on: { RETRY: 'loading' } },
  },
});
```

Rules:

- Define states explicitly — do not use boolean flags for state.
- Define all transitions — no implicit transitions.
- Use parallel states for independent concerns.
- Use history states for "go back" behavior.
- Use context for data that lives alongside state.

Anti-patterns:

- Using `isLoading`, `isError`, `isSuccess` booleans instead of a state machine
- Allowing invalid transitions ("can I go from error to success without retry?")
- Missing error states

---

## Signals (Solid / Angular / Vue Reactivity)

Use when: fine-grained reactivity is needed, performance-critical updates, minimal re-rendering.

Pattern (Solid):

```javascript
const [count, setCount] = createSignal(0);
// In template: <div>{count()}</div>
// Update: setCount(c => c + 1);
```

Pattern (Angular):

```typescript
count = signal(0);
// In template: {{ count() }}
// Update: this.count.update(c => c + 1);
```

Rules:

- Use signals for primitive values.
- Use stores for complex objects.
- Derive values with computed/memo.
- Avoid reading signals inside effects unless necessary.
- Use batch updates when mutating multiple signals.

---

## Context Pattern (React Context / Provide-Inject)

Use when: state is needed by many components in a subtree, but is not complex enough for a full store.

Pattern:

```javascript
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}
```

Rules:

- Do not use Context for high-frequency updates (causes re-renders of all consumers).
- Split contexts by concern (theme, auth, locale).
- Use context for dependency injection, not state management.
- For complex state in context, pair with a store (useReducer + Context, or Zustand + Context).

Anti-patterns:

- Putting entire app state in one context
- Using context for form state
- Passing setters through context without memoization

---

## Universal Rules

1. **Derived state**: compute during render, never store. `const filtered = items.filter(...)` not `const [filtered, setFiltered] = useState(...)`.
2. **Immutable updates**: never mutate state directly. Use spread, structuredClone, or Immer.
3. **Single source of truth**: one place owns each piece of data. No duplication.
4. **Minimal state**: if you can derive it, do not store it. If you can compute it, do not cache it.
5. **Colocate state**: keep state as close as possible to where it is used.
6. **Lift state sparingly**: only lift when multiple siblings truly need shared access.
7. **Async state**: use loading/error/data pattern. Never leave state in a partially loaded state.
8. **Optimistic updates**: update UI immediately, revert on failure. Use for user-facing actions with low failure rates.
9. **Persistence**: serialize state to localStorage/URL/session only for truly persistent concerns (auth, preferences, deep links).
10. **Debugging**: use Redux DevTools, XState inspector, or Zustand devtools middleware. Always enable in development.

---

## Common Bugs and Fixes

| Bug | Cause | Fix |
|-----|-------|-----|
| Stale closure | Reading state inside callback without dependency | Use functional updates or ref |
| Unnecessary re-renders | Object/array reference changes | Use selectors, memoize, use `useMemo` |
| Lost updates | Concurrent async writes | Use event queue or state machine |
| Hydration mismatch | Server/client state differs | Initialize state from props/URL |
| State duplication | Same data in multiple stores | Normalize, single source of truth |
