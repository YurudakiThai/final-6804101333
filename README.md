# Final Exam Playwright

## IT-01: Top-Down Integration Testing

- **Real:** Login Form. Authentication process.
- **Stub:** Inventory page. Replaced real DOM with `page.setContent()` mock HTML. Bypasses real inventory load.

## IT-02: Bottom-Up Integration Testing

- **Driver:** `BrowserContext.addCookies()` injects `session-username`. Bypasses Login UI.
- **Real:** Inventory page. Shopping Cart. Add/Remove actions.
