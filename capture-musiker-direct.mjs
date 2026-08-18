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
  // Navigate to bandvorstellung section which contains Die Musiker
  await page.goto('http://localhost:3000/#bandvorstellung', { waitUntil: 'networkidle' });
  
  await page.waitForTimeout(500);
  
  // Take screenshot starting from Die Musiker
  const musicianImages = await page.locator('img[alt*="von Alegría"]').first();
  if (musicianImages) {
    await musicianImages.scrollIntoViewIfNeeded();
  }
  
  await page.waitForTimeout(300);
  await page.screenshot({ path: `/tmp/musiker-direct-${vp.name}.png` });
  console.log(`✓ Screenshot: musiker-direct-${vp.name}.png`);
}

await browser.close();
