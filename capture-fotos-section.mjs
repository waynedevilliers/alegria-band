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

  // Scroll to Fotos and measure spacing
  const fotosInfo = await page.evaluate(() => {
    const section = document.getElementById('fotos');
    if (!section) return null;
    
    const grid = section.querySelector('.grid');
    if (!grid) return null;
    
    const rect = section.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    const computed = window.getComputedStyle(section);
    
    return {
      sectionPaddingBottom: computed.paddingBottom,
      sectionHeight: rect.height,
      gridHeight: gridRect.height,
      gridLastItemBottom: Math.max(...Array.from(grid.querySelectorAll('button')).map(btn => btn.getBoundingClientRect().bottom)),
      sectionBottom: gridRect.bottom + parseFloat(computed.paddingBottom),
      spaceBelow: rect.bottom - gridRect.bottom
    };
  });

  console.log(`\n${vp.name}:`);
  console.log(`  Section padding-bottom: ${fotosInfo.sectionPaddingBottom}`);
  console.log(`  Grid height: ${fotosInfo.gridHeight.toFixed(0)}px`);
  console.log(`  Space below grid (before section end): ${fotosInfo.spaceBelow.toFixed(0)}px`);
  console.log(`  Section total height: ${fotosInfo.sectionHeight.toFixed(0)}px`);

  // Capture the section
  const fotosSection = await page.locator('#fotos');
  await fotosSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `/tmp/fotos-before-${vp.name}.png` });
}

await browser.close();
console.log('\n✓ Screenshots captured');
