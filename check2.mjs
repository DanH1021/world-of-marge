import { chromium } from 'playwright';
const errors = [];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
page.on('pageerror', (err) => errors.push('PAGEERROR: ' + err.message));
page.on('console', (msg) => { if (msg.type() === 'error' && !msg.text().includes('net::ERR') && !msg.text().includes('unsplash') && !msg.text().includes('fonts.googleapis') && !msg.text().includes('firebase')) errors.push(msg.text()); });

const pages = [
  ['/fargo/diner', 'diner-fargo-brand'],
  ['/ottertail/diner', 'diner-ottertail-brand'],
  ['/fargo/bar', 'bar-brand'],
  ['/fargo/supper-club', 'supper-club-logo'],
  ['/fargo/supper-club/lucky-lounge', 'lucky-lounge-logo'],
];
for (const [path, name] of pages) {
  await page.goto('http://localhost:4175' + path, { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `/tmp/screens/${name}.png`, fullPage: true });
}
await browser.close();
console.log('ERRORS:', JSON.stringify(errors, null, 2));
