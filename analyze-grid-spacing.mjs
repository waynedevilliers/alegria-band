import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000/#fotos', { waitUntil: 'networkidle' });

const gridAnalysis = await page.evaluate(() => {
  const grid = document.querySelector('#fotos .grid');
  const buttons = Array.from(grid.querySelectorAll('button'));
  
  const gridRect = grid.getBoundingClientRect();
  const computed = window.getComputedStyle(grid);
  
  // Get last button position
  const lastButton = buttons[buttons.length - 1];
  const lastButtonRect = lastButton.getBoundingClientRect();
  
  // Calculate grid gap
  const btn1 = buttons[0].getBoundingClientRect();
  const btn2 = buttons[1].getBoundingClientRect();
  const gap = btn2.top - (btn1.top + btn1.height);
  
  return {
    gridHeight: gridRect.height,
    lastButtonBottom: lastButtonRect.bottom,
    gridBottom: gridRect.bottom,
    spaceAfterLastButton: gridRect.bottom - lastButtonRect.bottom,
    gridGap: gap.toFixed(0),
    buttonCount: buttons.length,
    gridTemplateRows: computed.gridTemplateRows,
    gridAutoRows: computed.gridAutoRows,
    rowGap: computed.rowGap
  };
});

console.log('Grid Analysis (1440px):');
console.log(`  Total grid height: ${gridAnalysis.gridHeight.toFixed(0)}px`);
console.log(`  Last button bottom: ${gridAnalysis.lastButtonBottom.toFixed(0)}px`);
console.log(`  Grid bottom: ${gridAnalysis.gridBottom.toFixed(0)}px`);
console.log(`  Space after last button: ${gridAnalysis.spaceAfterLastButton.toFixed(0)}px`);
console.log(`  Grid gap/gap-4: ${gridAnalysis.gridGap}px (expected 16px)`);
console.log(`  Button count: ${gridAnalysis.buttonCount}`);
console.log(`  Grid template rows: ${gridAnalysis.gridTemplateRows}`);
console.log(`  Grid auto rows: ${gridAnalysis.gridAutoRows}`);
console.log(`  Row gap: ${gridAnalysis.rowGap}`);

await browser.close();
