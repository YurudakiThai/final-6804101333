import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: "https://www.saucedemo.com", // ⭐ ตัวที่ขาดไม่ได้
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  reporter: [
    ["list"], // แสดงผลใน Terminal
    ["html", { open: "never", outputFolder: "playwright-report" }], // HTML Report
    ["json", { outputFile: "test-results/results.json" }], // JSON Report
  ],
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
