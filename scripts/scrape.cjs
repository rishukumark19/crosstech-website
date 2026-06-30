const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ui.aceternity.com/components/github-globe', { waitUntil: 'networkidle2' });
  
  // Find the code block. Usually it's in a <pre> or inside a specific div.
  // We want the code for "globe.tsx"
  const codeBlocks = await page.evaluate(() => {
    const pres = Array.from(document.querySelectorAll('pre code'));
    return pres.map(pre => pre.innerText);
  });
  
  fs.writeFileSync('scraped-code.json', JSON.stringify(codeBlocks, null, 2));
  await browser.close();
  console.log('Scraped', codeBlocks.length, 'code blocks.');
})();
