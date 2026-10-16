Running 8 tests using 4 workers
  ✓  1 …integration/IT-01.spec.ts:3:5 › IT-01: top-down REAL Login -> browser-level Inventory STUB (836ms)
  ✓  2 …tests/integration/IT-02.spec.ts:3:5 › IT-02: DRIVER login state -> REAL Inventory and Cart (964ms)
  ✓  3 [chromium] › tests/system/ST-01.spec.ts:3:5 › ST-01: complete purchase of two products (1.1s)
  ✓  4 [chromium] › tests/system/ST-02.spec.ts:3:5 › ST-02: checkout validation and recovery (1.2s)
  ✓  5 …it/UT-01.spec.ts:4:7 › UT-01: Login Form Validation › UT-01.1: empty username and password (789ms)
  ✓  6 …/unit/UT-02.spec.ts:3:5 › UT-02: product button state Add to cart -> Remove -> Add to cart (523ms)
  ✓  7 …› tests/unit/UT-01.spec.ts:26:7 › UT-01: Login Form Validation › UT-01.2: missing password (587ms)
  ✘  8 …sts/unit/UT-01.spec.ts:49:7 › UT-01: Login Form Validation › UT-01.3: invalid login details (5.5s)

  1) [chromium] › tests/unit/UT-01.spec.ts:49:7 › UT-01: Login Form Validation › UT-01.3: invalid login de
tails › ตรวจสอบ Error และ URL

    Error: expect(locator).toContainText(expected) failed

    Locator: locator('[data-test="error"]')
    Expected substring: "Username and Password do not match"
    Received string:    "Epic sadface: Username and password do not match any user in this service"
    Timeout: 5000ms

    Call log:
      - Expect "toContainText" locator('[data-test="error"]') with timeout 5000ms
      - waiting for locator('[data-test="error"]')
        14 × locator resolved to <h3 role="alert" data-test="error">…</h3>
           - unexpected value "Epic sadface: Username and password do not match any user in this service"


      65 |       });
      66 |       await test.step("ตรวจสอบ Error และ URL", async () => {
    > 67 |         await expect(page.locator('[data-test="error"]')).toContainText(
         |                                                           ^
      68 |           "Username and Password do not match",
      69 |         );
      70 |         await expect(page).toHaveURL(/.*saucedemo.com/);
        at /Users/sapon/Desktop/Txt_note_F/MJUYear2/brain/01-university/assignments/final-exam-playwright/
tests/unit/UT-01.spec.ts:67:59
        at /Users/sapon/Desktop/Txt_note_F/MJUYear2/brain/01-university/assignments/final-exam-playwright/
tests/unit/UT-01.spec.ts:66:7

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/unit-UT-01-UT-01-Login-For-ab7d7--01-3-invalid-login-details-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/unit-UT-01-UT-01-Login-For-ab7d7--01-3-invalid-login-details-chromium/erro
r-context.md

  1 failed
    [chromium] › tests/unit/UT-01.spec.ts:49:7 › UT-01: Login Form Validation › UT-01.3: invalid login det
ails
  7 passed (8.5s)

To open last HTML report run:

  npx playwright show-report
