# Testing Patterns

## Philosophy

Tests are not a chore. They are a design tool. Writing tests first forces you to think about the interface before the implementation. Tests are also documentation — they show how the code is supposed to be used. Every test you write is an investment in future confidence.

---

## Test Pyramid

```
        /  E2E  \        (few, slow, high confidence)
       /----------\
      / Integration \     (some, medium speed)
     /----------------\
    /     Unit Tests     \  (many, fast, focused)
   /______________________\
```

| Layer | Speed | Count | Confidence | Cost |
|-------|-------|-------|------------|------|
| Unit | Fast (ms) | Many | Low (isolated) | Low |
| Integration | Medium (sec) | Some | Medium | Medium |
| E2E | Slow (min) | Few | High (user journey) | High |

Rules:

- Write many unit tests for business logic.
- Write some integration tests for component interaction.
- Write few E2E tests for critical user journeys.
- Do not test implementation details — test behavior.

---

## Unit Testing

### What to Unit Test

- Pure functions (input → output)
- Business logic (calculations, transformations, validations)
- State transitions (reducer, store actions)
- Utility functions (formatting, parsing, normalization)
- Hooks (with renderHook)

### What NOT to Unit Test

- Framework internals (React rendering, Vue reactivity)
- Third-party library behavior
- Trivial getters/setters
- CSS styles
- Exact HTML structure (test behavior, not markup)

### Pattern: Arrange-Act-Assert

```javascript
test('calculates total price with discount', () => {
  // Arrange
  const items = [{ price: 100 }, { price: 200 }];
  const discount = 0.1;

  // Act
  const total = calculateTotal(items, discount);

  // Assert
  expect(total).toBe(270);
});
```

### Pattern: Edge Cases

```javascript
test('handles empty cart', () => {
  expect(calculateTotal([], 0.1)).toBe(0);
});

test('handles negative prices', () => {
  expect(calculateTotal([{ price: -50 }], 0)).toBe(-50);
});

test('handles maximum discount (100%)', () => {
  expect(calculateTotal([{ price: 100 }], 1)).toBe(0);
});
```

### Pattern: Error Cases

```javascript
test('throws on invalid email', () => {
  expect(() => validateEmail('not-an-email')).toThrow('Invalid email');
});

test('returns null on network failure', async () => {
  mockFetch.rejectOnce(new Error('Network error'));
  const result = await fetchUser(1);
  expect(result).toBeNull();
});
```

---

## Integration Testing

### What to Integration Test

- Component + API (mock API, render component, verify behavior)
- Component + Store (render, interact, verify state changes)
- API + Database (real or in-memory DB, verify queries)
- Full form flow (fill, submit, verify response)
- Authentication flow (login, token, protected route)

### Pattern: Component with API

```javascript
test('renders user list from API', async () => {
  // Mock API
  server.use(
    rest.get('/api/users', (req, res, ctx) => {
      return res(ctx.json([{ id: 1, name: 'Alice' }]));
    })
  );

  render(<UserList />);

  // Wait for data
  expect(await screen.findByText('Alice')).toBeInTheDocument();
});
```

### Pattern: Form Submission

```javascript
test('submits form and shows success', async () => {
  render(<ContactForm />);

  // Fill form
  await userEvent.type(screen.getByLabelText('Name'), 'Alice');
  await userEvent.type(screen.getByLabelText('Email'), 'alice@test.com');
  await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

  // Verify
  expect(await screen.findByText('Message sent')).toBeInTheDocument();
});
```

### Pattern: Authentication Flow

```javascript
test('redirects to login when unauthenticated', async () => {
  render(<App />, { wrapper: BrowserRouter });

  // Try to access protected route
  history.push('/dashboard');

  // Should redirect
  expect(history.location.pathname).toBe('/login');
});
```

---

## End-to-End Testing

### What to E2E Test

- Critical user journeys (signup, checkout, core workflow)
- Cross-browser compatibility
- Payment flows
- File upload/download
- Multi-step forms
- Real-time features

### What NOT to E2E Test

- Every edge case (use unit tests)
- UI styling (use visual regression)
- API response format (use integration tests)
- Performance (use load tests)

### Pattern: Page Object Model

```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Log in' });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

test('user can log in and see dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/login');
  await loginPage.login('alice@test.com', 'password123');
  await expect(page.getByText('Welcome, Alice')).toBeVisible();
});
```

### Pattern: API Mocking in E2E

```javascript
test('shows error when API fails', async ({ page }) => {
  await page.route('**/api/users', (route) => {
    route.fulfill({ status: 500, body: 'Server error' });
  });

  await page.goto('/users');
  await expect(page.getByText('Something went wrong')).toBeVisible();
});
```

---

## Mocking Patterns

### When to Mock

- External API calls (never hit real APIs in tests)
- File system (use in-memory or temp directories)
- Time (use fake timers)
- Random values (use seeded random)
- Browser APIs (use jsdom or happy-dom)

### When NOT to Mock

- The code under test
- Simple utility functions
- In-memory database (use real queries against test DB)

### Mock Strategies

| Strategy | Use When | Example |
|----------|----------|---------|
| Manual mock | Reusable mock | `__mocks__/api.js` |
| Inline mock | One-off mock | `jest.fn(() => 'value')` |
| MSW (Mock Service Worker) | API mocking | `server.use(rest.get(...))` |
| Fake timer | Time-dependent code | `jest.useFakeTimers()` |
| Spy | Verify calls | `jest.spyOn(obj, 'method')` |

---

## Test-Driven Development (TDD)

### Cycle: Red → Green → Refactor

1. **Red**: Write a failing test for the next requirement.
2. **Green**: Write the minimum code to make the test pass.
3. **Refactor**: Clean up the code while keeping tests green.

### Rules

- Never write production code without a failing test first.
- Keep commits small — one red-green-refactor cycle per commit.
- If you cannot think of a test, you do not understand the requirement.
- Refactor only when all tests are green.

---

## Behavior-Driven Development (BDD)

### Gherkin Syntax

```gherkin
Feature: Shopping Cart

  Scenario: Adding item to cart
    Given I am on the product page
    When I click "Add to Cart"
    Then the cart count should increase by 1
    And I should see "Item added to cart"

  Scenario: Applying discount code
    Given I have items in my cart
    When I enter discount code "SAVE10"
    Then the total should decrease by 10%
```

### Rules

- Write scenarios from the user's perspective.
- Use business language, not technical language.
- Keep scenarios short (3-5 steps).
- One scenario per test case.

---

## Testing by Framework

### React / Next.js

- Unit: Jest + React Testing Library
- Integration: Jest + RTL + MSW
- E2E: Playwright or Cypress
- Component: Storybook + Chromatic (visual regression)

```javascript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('increments counter on click', async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole('button', { name: 'Increment' }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

### Vue / Nuxt

- Unit: Vitest + Vue Test Utils
- Integration: Vitest + VTU + MSW
- E2E: Playwright or Cypress

```javascript
import { mount } from '@vue/test-utils';
import Counter from './Counter.vue';

test('increments counter', async () => {
  const wrapper = mount(Counter);
  await wrapper.find('button').trigger('click');
  expect(wrapper.text()).toContain('Count: 1');
});
```

### Node.js / Express

- Unit: Jest or Vitest
- Integration: Supertest + real DB (testcontainers)
- E2E: Playwright

```javascript
import request from 'supertest';
import app from '../app.js';

test('GET /api/users returns user list', async () => {
  const res = await request(app).get('/api/users');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body.data)).toBe(true);
});
```

### Python / Django / FastAPI

- Unit: pytest
- Integration: pytest + httpx + test database
- E2E: Playwright

```python
def test_create_user(client):
    response = client.post("/api/users", json={"name": "Alice"})
    assert response.status_code == 201
    assert response.json()["data"]["name"] == "Alice"
```

---

## Coverage Guidelines

| Metric | Target | Meaning |
|--------|--------|---------|
| Line coverage | > 80% | Most lines tested |
| Branch coverage | > 70% | Most branches tested |
| Function coverage | > 90% | Most functions tested |
| Critical paths | 100% | All user journeys tested |

Rules:

- Coverage is a guide, not a goal. 100% coverage does not mean zero bugs.
- Focus coverage on business logic, not boilerplate.
- Use coverage to find untested code, not to prove quality.

---

## CI/CD Integration

### Pipeline

```
Lint → Unit Test → Integration Test → Build → E2E Test → Deploy
```

### Rules

- Run lint on every commit.
- Run unit tests on every PR.
- Run integration tests on merge to main.
- Run E2E tests before deploy.
- Block deploy on any test failure.
- Report coverage trends (do not allow decrease).

---

## Universal Rules

1. **Test behavior, not implementation.** If you refactor internals without changing behavior, tests should not break.
2. **One assertion per test concept.** Each test should verify one thing.
3. **Independent tests.** Tests should not depend on each other or on execution order.
4. **Deterministic.** Same input → same output. No flaky tests.
5. **Fast.** Unit tests in milliseconds. If a test is slow, it is probably doing too much.
6. **Readable.** Test names describe the scenario: `test('returns empty array when no items match')`.
7. **Maintainable.** Delete tests for removed features. Do not keep dead tests.
8. **No test debt.** If a test fails, fix it immediately. Do not skip it or mark it as expected failure.
9. **Test data factories.** Use factories (not fixtures) for test data. `createUser({ name: 'Alice' })` not a JSON file.
10. **Mock boundaries, not internals.** Mock APIs, databases, and external services. Do not mock the code under test.
