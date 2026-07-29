import { test, expect } from '@playwright/test';

test.describe('Alegría! Website Smoke Tests', () => {
  test('page loads without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    expect(errors).toHaveLength(0);
  });

  test('all main sections render and are in DOM', async ({ page }) => {
    await page.goto('/');

    // Check hero section
    await expect(page.locator('h1')).toContainText('Alegría!');

    // Check all section IDs exist
    await expect(page.locator('#bandvorstellung')).toBeTruthy();
    await expect(page.locator('#termine')).toBeTruthy();
    await expect(page.locator('#fotos')).toBeTruthy();
    await expect(page.locator('#videos')).toBeTruthy();
    await expect(page.locator('#kontakt')).toBeTruthy();

    // Check key headings
    await expect(page.locator('text=Bandvorstellung')).toBeTruthy();
    await expect(page.locator('text=Termine')).toBeTruthy();
    await expect(page.locator('text=Fotos')).toBeTruthy();
    await expect(page.locator('text=Videos')).toBeTruthy();
    await expect(page.locator('text=Kontakt')).toBeTruthy();
  });

  test('navbar contains all nav links', async ({ page }) => {
    await page.goto('/');

    const navBar = page.locator('header');
    await expect(navBar.locator('a[href="#hero"]')).toBeTruthy();
    await expect(navBar.locator('a[href="#bandvorstellung"]')).toBeTruthy();
    await expect(navBar.locator('a[href="#termine"]')).toBeTruthy();
    await expect(navBar.locator('a[href="#fotos"]')).toBeTruthy();
    await expect(navBar.locator('a[href="#videos"]')).toBeTruthy();
    await expect(navBar.locator('a[href="#kontakt"]')).toBeTruthy();
  });

  test('setlist modal button renders', async ({ page }) => {
    await page.goto('/#bandvorstellung');

    const modalButton = page.locator('button').filter({ hasText: 'Setlist anschauen' });
    await expect(modalButton).toBeTruthy();
  });

  test('termine section has accordion details', async ({ page }) => {
    await page.goto('/#termine');

    // Check that details/accordion elements exist
    const details = page.locator('#termine').locator('details');
    const count = await details.count();
    expect(count).toBeGreaterThan(0);

    // Check that 2026 is open by default
    const firstDetails = details.first();
    const isOpen = await firstDetails.evaluate((el) => el.hasAttribute('open'));
    expect(isOpen).toBe(true);
  });

  test('fotos section carousel works', async ({ page }) => {
    await page.goto('/#fotos');

    const prevButton = page.locator('#fotos').locator('button[aria-label="Previous image"]');
    const nextButton = page.locator('#fotos').locator('button[aria-label="Next image"]');

    await expect(prevButton).toBeTruthy();
    await expect(nextButton).toBeTruthy();

    const counter = page.locator('#fotos').locator('text=/1 \\//');
    await expect(counter).toBeTruthy();
  });

  test('videos section has video containers', async ({ page }) => {
    await page.goto('/#videos');

    const videoContainers = page.locator('#videos [class*="relative"]');
    const count = await videoContainers.count();
    expect(count).toBeGreaterThan(0);
  });

  test('footer has legal links', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer.locator('a[href="/impressum"]')).toBeTruthy();
    await expect(footer.locator('a[href="/datenschutz"]')).toBeTruthy();
  });
});
