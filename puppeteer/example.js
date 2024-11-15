// to run: HEADLESS=false PUPPETEER_NO_EXIT=true node puppeteer/example.js

const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // executablePath: '/Applications/Chromium_110.app/Contents/MacOS/Chromium',
    headless: 'new',
  });
  const page = (await browser.pages())[0];

  // Navigate the page to a URL
  await page.goto('file:///Users/mschile/Projects/cypress-test-tiny/cypress/fixtures/dom.html');

  const selector = '.big';
  await page.waitForSelector(selector);
  await page.click(selector);

  await browser.close();
})();
