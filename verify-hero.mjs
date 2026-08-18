import { chromium } from 'playwright';

const viewports = [
  { width: 1440, height: 800, name: '1440x800' },
  { width: 1920, height: 1080, name: '1920x1080' }
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize(vp);
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const heroHeight = await page.evaluate(() => {
    const hero = document.getElementById('hero');
    if (!hero) return null;
    const rect = hero.getBoundingClientRect();
    const computed = window.getComputedStyle(hero);
    return {
      offsetHeight: hero.offsetHeight,
      viewportHeight: window.innerHeight,
      computed: {
        paddingTop: computed.paddingTop,
        paddingBottom: computed.paddingBottom
      }
    };
  });
  
  console.log(`\n${vp.name}:`);
  console.log(`  Hero section height: ${heroHeight.offsetHeight}px`);
  console.log(`  Viewport height: ${heroHeight.viewportHeight}px`);
  console.log(`  Fits in viewport: ${heroHeight.offsetHeight <= heroHeight.viewportHeight ? '✓ YES' : '✗ NO (overflow)'}`);
  
  await page.screenshot({ path: `/tmp/hero-${vp.name}.png` });
}

await browser.close();
console.log('\nScreenshots saved');
