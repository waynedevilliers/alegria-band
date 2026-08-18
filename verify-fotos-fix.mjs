import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000/#fotos', { waitUntil: 'networkidle' });

await page.waitForTimeout(500);

// Scroll to Fotos section
await page.evaluate(() => {
  const fotos = document.getElementById('fotos');
  if (fotos) fotos.scrollIntoView({ behavior: 'auto', block: 'center' });
});

await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/fotos-verify-1440px.png' });
console.log('✓ Screenshot: fotos-verify-1440px.png');

await browser.close();
