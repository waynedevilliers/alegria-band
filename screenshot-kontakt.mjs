import { chromium } from 'playwright';

const viewports = [
  { width: 375, height: 667, name: '375px' },
  { width: 1440, height: 900, name: '1440px' }
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await page.newPage();
  await page.setViewportSize(vp);
  await page.goto('http://localhost:3000/#kontakt', { waitUntil: 'networkidle' });

  const section = await page.locator('#kontakt').first();
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `/tmp/kontakt-improved-${vp.name}.png` });
  console.log(`✓ Screenshot: kontakt-improved-${vp.name}.png`);
}

await browser.close();
