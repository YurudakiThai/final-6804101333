# Final Exam Playwright

รายวิชา: Software Testing  
ระบบที่ทดสอบ: https://www.saucedemo.com  
เครื่องมือ: Playwright Test + TypeScript

## วิธีติดตั้ง

```bash
npm init playwright@latest
npm install
npx playwright install chromium
```

## วิธีรัน

```bash
npx playwright test
npx playwright show-report
```

## ผลลัพธ์

- HTML Report อยู่ที่ `playwright-report/index.html`
- JSON Report อยู่ที่ `reports/results.json`
- สรุปผลอยู่ที่ `reports/test-summary.md`

## โครงสร้างไฟล์

```text
tests/unit/UT-01.spec.ts
tests/unit/UT-02.spec.ts
tests/integration/IT-01.spec.ts
tests/integration/IT-02.spec.ts
tests/system/ST-01.spec.ts
tests/system/ST-02.spec.ts
```

## IT-01: Top-Down Integration Testing

- ส่วนที่เป็นของจริง: หน้า Login และกระบวนการ Authentication
- ส่วนที่เป็น Stub: หน้า Inventory
- Stub สร้างด้วย `page.setContent()` ในระดับ browser
- ใช้ Stub เพื่อแทนที่หน้า Inventory จริงหลังจาก Login สำเร็จ

## IT-02: Bottom-Up Integration Testing

- Driver: `driverOpenInventory()`
- Driver ทำงานผ่าน `context.addCookies()` เพื่อตั้ง `session-username`
- Driver ทำให้ข้ามหน้า Login และเปิดหน้า Inventory จริงได้ทันที
- ส่วนที่เป็นของจริง: หน้า Inventory, Cart, ปุ่ม Add to cart และ Cart Badge
