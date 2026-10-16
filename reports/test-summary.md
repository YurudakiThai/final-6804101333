# Test Summary

Run command: `npx playwright test`
Browser: chromium

| No | Test | Result |
| --- | --- | --- |
| 1 | UT-01.1 empty username and password | passed |
| 2 | UT-01.2 missing password | passed |
| 3 | UT-01.3 invalid login details | passed |
| 4 | UT-02 product button state | passed |
| 5 | IT-01 top-down real login with inventory stub | passed |
| 6 | IT-02 driver login state to real inventory and cart | passed |
| 7 | ST-01 complete purchase of two products | passed |
| 8 | ST-02 checkout validation and recovery | passed |

Total: 8 passed, 0 failed

Reports:

- HTML: `playwright-report/index.html`
- JSON: `reports/results.json`
