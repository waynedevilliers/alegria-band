#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const baseUrl = 'http://localhost:3001';
const outputDir = './screenshots';

// Create screenshots directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const viewports = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

async function takeScreenshots() {
  const browser = await chromium.launch();

  for (const viewport of viewports) {
    const context = await browser.createBrowserContext({ viewport });
    const page = await context.newPage();

    console.log(`📸 Taking screenshot at ${viewport.width}px...`);

    try {
      await page.goto(baseUrl, { waitUntil: 'networkidle' });

      // Full page screenshot
      const fullPage = await page.screenshot({ fullPage: true });
      fs.writeFileSync(
        path.join(outputDir, `${viewport.name}-full.png`),
        fullPage
      );

      // Viewport screenshot
      const viewport_ss = await page.screenshot({ fullPage: false });
      fs.writeFileSync(
        path.join(outputDir, `${viewport.name}-viewport.png`),
        viewport_ss
      );

      console.log(`✓ Saved ${viewport.name}-full.png and ${viewport.name}-viewport.png`);
    } catch (err) {
      console.error(`✗ Error at ${viewport.width}px:`, err.message);
    }

    await context.close();
  }

  await browser.close();
  console.log('\n✓ All screenshots saved to ./screenshots/');
}

takeScreenshots().catch(console.error);
