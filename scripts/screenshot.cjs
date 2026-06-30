const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ defaultViewport: { width: 1280, height: 800 } });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot.png' });
  
  await browser.close();
  console.log('Screenshot saved.');
})();
