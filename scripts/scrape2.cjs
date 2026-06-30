const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('https://ui.aceternity.com/components/github-globe', { waitUntil: 'networkidle2' });
  
  // click the "Code" tab if it exists
  const codeTab = await page.$('button[role="tab"]:not([data-state="active"])');
  if (codeTab) {
      await codeTab.click();
      await new Promise(r => setTimeout(r, 1000));
  }
  
  // evaluate and extract all <pre> texts
  const codeBlocks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('pre')).map(pre => pre.innerText);
  });
  
  fs.writeFileSync('extracted-code-tabs.json', JSON.stringify(codeBlocks, null, 2));
  await browser.close();
  console.log('Done!');
})();
