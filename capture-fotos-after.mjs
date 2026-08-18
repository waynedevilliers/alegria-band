import { chromium } from 'playwright';

const viewports = [
  { width: 1440, height: 900, name: '1440px' },
  { width: 375, height: 667, name: '375px' }
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize(vp);
  await page.goto('http://localhost:3000/#fotos', { waitUntil: 'networkidle' });

  // Measure after fix
  const fotosInfo = await page.evaluate(() => {
    const section = document.getElementById('fotos');
    const grid = section.querySelector('.grid');
    const rect = section.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    const computed = window.getComputedStyle(section);
    
    const lastButton = Array.from(grid.querySelectorAll('button')).pop();
    const lastButtonRect = lastButton.getBoundingClientRect();
    
    return {
      sectionHeight: rect.height,
      gridHeight: gridRect.height,
      spaceBelow: rect.bottom - gridRect.bottom,
      spaceAfterLastButton: gridRect.bottom - lastButtonRect.bottom,
      gridTemplateRows: window.getComputedStyle(grid).gridTemplateRows
    };
  });

  console.log(`\n${vp.name}:`);
  console.log(`  Grid template rows: ${fotosInfo.gridTemplateRows}`);
  console.log(`  Grid height: ${fotosInfo.gridHeight.toFixed(0)}px`);
  console.log(`  Space after last button: ${fotosInfo.spaceAfterLastButton.toFixed(0)}px`);
  console.log(`  Total section height: ${fotosInfo.sectionHeight.toFixed(0)}px`);

  const fotosSection = await page.locator('#fotos');
  await fotosSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `/tmp/fotos-after-${vp.name}.png` });
}

await browser.close();
console.log('\n✓ After screenshots captured');
