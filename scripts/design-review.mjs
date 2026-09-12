// Reproducible visual evidence. Run against `npm run dev` or `npm run preview`.
// Provide PLAYWRIGHT_MODULE / SHARP_MODULE when using a bundled tool runtime.
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const stage = process.argv[2] || 'current';
const out = path.resolve('.design-review.local', stage);
const base = process.env.REVIEW_URL || 'http://127.0.0.1:5173';
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, channel: process.env.REVIEW_BROWSER || 'msedge' });
const routes = [
  ['home', '/'],
  ['bookthing', '/projects/ngo-website-redesign'],
  ['patsy', '/projects/restaurant-website-redesign'],
];
const results = [];
try {
  for (const [name, route] of routes.filter(([name]) => !process.env.REVIEW_PAGES || process.env.REVIEW_PAGES.split(',').includes(name))) {
    for (const width of [1440, 820, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
      await page.goto(`${base}/#${route}`, { waitUntil: 'networkidle' });
      await page.evaluate(async () => {
        await document.fonts.ready;
        document.querySelectorAll('img').forEach(img => img.loading = 'eager');
        await Promise.all(Array.from(document.images, img => img.decode().catch(() => {})));
      });
      await page.screenshot({ path: path.join(out, `${name}-${width}-top.png`) });
      await page.screenshot({ path: path.join(out, `${name}-${width}-full.png`), fullPage: true });
      const check = await page.evaluate(() => ({
        title: document.title,
        h1: Array.from(document.querySelectorAll('h1'), node => node.textContent),
        width: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        missingImages: Array.from(document.images).filter(img => !img.complete || !img.naturalWidth).map(img => img.src),
        links: Array.from(document.querySelectorAll('a'), a => ({ text: a.textContent.trim(), href: a.getAttribute('href') })),
      }));
      // Contact sheet preserves the entire page in reading-order columns.
      const full = path.join(out, `${name}-${width}-full.png`);
      const cellWidth = width === 390 ? 260 : 480;
      const scaled = await sharp(full).resize({ width: cellWidth }).png().toBuffer();
      const info = await sharp(scaled).metadata();
      const cellHeight = 1200;
      const columns = Math.ceil(info.height / cellHeight);
      const slices = [];
      for (let column = 0; column < columns; column++) {
        const h = Math.min(cellHeight, info.height - column * cellHeight);
        slices.push({ input: await sharp(scaled).extract({ left: 0, top: column * cellHeight, width: cellWidth, height: h }).png().toBuffer(), left: column * (cellWidth + 16), top: 0 });
      }
      await sharp({ create: { width: columns * (cellWidth + 16) - 16, height: cellHeight, channels: 3, background: '#deded8' } }).composite(slices).png().toFile(path.join(out, `${name}-${width}-overview.png`));
      if (width === 1440 || width === 390) {
        for (const selector of name === 'home' ? ['#projects'] : name === 'bookthing' ? ['.bt-ia', '.bt-donate', '.bt-calendar', '.bt-final'] : ['.ps-research', '.ps-pickup', '.ps-final']) {
          const section = page.locator(selector);
          if (await section.count()) await section.screenshot({ path: path.join(out, `${name}-${width}-${selector.replace(/[.#]/g, '')}.png`) });
        }
      }
      results.push({ name, ...check, errors });
      await page.close();
    }
  }
  await writeFile(path.join(out, 'checks.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.map(({name, width, scrollWidth, height, h1, missingImages, errors}) => ({name, width, scrollWidth, height, h1, missingImages, errors})), null, 2));
  console.log(`Screenshots: ${out}`);
} finally {
  await browser.close();
}
