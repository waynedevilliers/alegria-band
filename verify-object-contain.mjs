import { chromium } from 'playwright';

const viewports = [
  { width: 375, height: 667, name: '375px' },
  { width: 768, height: 1024, name: '768px' },
  { width: 1440, height: 900, name: '1440px' }
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize(vp);
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for image to load
  await page.waitForSelector('img[alt*="live auf"]', { timeout: 5000 });
  
  await page.screenshot({ path: `/tmp/contain-${vp.name}.png` });
  console.log(`✓ Screenshot: contain-${vp.name}.png`);
}

await browser.close();
