import { chromium } from 'playwright';

const viewports = [
  { width: 375, height: 667, name: '375px (mobile)' },
  { width: 768, height: 1024, name: '768px (tablet)' },
  { width: 1440, height: 900, name: '1440px (desktop)' }
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize(vp);
  await page.goto('http://localhost:3000#bandvorstellung', { waitUntil: 'networkidle' });
  
  const musikerInfo = await page.evaluate(() => {
    const section = Array.from(document.querySelectorAll('div')).find(el => 
      el.textContent.includes('Die Musiker')
    );
    if (!section) return null;
    
    const images = section.querySelectorAll('img[alt*="von Alegría"]');
    if (images.length === 0) return null;
    
    const img = images[0];
    const rect = img.getBoundingClientRect();
    const computed = window.getComputedStyle(img.parentElement);
    
    return {
      imageCount: images.length,
      firstImageWidth: rect.width,
      firstImageHeight: rect.height,
      aspectRatio: (rect.width / rect.height).toFixed(2)
    };
  });
  
  if (musikerInfo) {
    console.log(`\n${vp.name}:`);
    console.log(`  Images found: ${musikerInfo.imageCount}`);
    console.log(`  First image: ${musikerInfo.firstImageWidth.toFixed(0)}×${musikerInfo.firstImageHeight.toFixed(0)}px`);
    console.log(`  Aspect ratio: ${musikerInfo.aspectRatio} (expected ~0.73 for w-32 h-44)`);
  }
}

await browser.close();
