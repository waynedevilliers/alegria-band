import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
console.log('Full page height:', scrollHeight, 'px');

// Take a full-page screenshot
await page.screenshot({ 
  path: '/tmp/full-page-1440.png', 
  fullPage: true 
});

console.log('Screenshot saved to /tmp/full-page-1440.png');
await browser.close();
