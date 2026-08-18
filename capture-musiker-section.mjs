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
  
  // Scroll to Die Musiker section
  await page.evaluate(() => {
    const section = Array.from(document.querySelectorAll('*')).find(el => 
      el.textContent.includes('Die Musiker') && el.textContent.includes('Klaus')
    );
    if (section) {
      section.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  });
  
  await page.waitForTimeout(500);
  await page.screenshot({ path: `/tmp/musiker-section-${vp.name}.png` });
  console.log(`✓ Screenshot: musiker-section-${vp.name}.png`);
}

await browser.close();
