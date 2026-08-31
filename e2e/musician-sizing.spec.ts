import { test, expect } from '@playwright/test';

test.describe('Musician Section Photo Sizing', () => {
  const breakpoints = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 },
  ];

  for (const bp of breakpoints) {
    test(`musicians section renders sharply at ${bp.name} (${bp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto('/#bandvorstellung');

      // Find the Die Musiker heading and its parent section
      const musikerHeading = page.locator('h3:has-text("Die Musiker")');
      await expect(musikerHeading).toBeTruthy();

      // Check that all 4 musician images are present
      const images = page.locator('#bandvorstellung img[alt*="von Alegría"]');
      const imageCount = await images.count();
      expect(imageCount).toBe(4);

      // Verify each image has proper dimensions set (170x238)
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const width = await img.getAttribute('width');
        const height = await img.getAttribute('height');
        expect(width).toBe('170');
        expect(height).toBe('238');
      }

      // Take screenshot of the section for visual verification
      const section = musikerHeading.locator('..');
      await section.screenshot({ path: `./e2e/screenshots/musiker-${bp.name}.png` });
    });
  }

  test('musician grid layout adapts correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/#bandvorstellung');

    // On mobile, the flex-wrap should allow graceful degradation
    const imageContainer = page.locator('h3:has-text("Die Musiker")').locator('..').locator('> div:last-child');

    // Get computed styles to verify flex layout
    const display = await imageContainer.evaluate(el => window.getComputedStyle(el).display);
    expect(display).toBe('flex');
  });
});
