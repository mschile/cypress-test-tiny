const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    executablePath: '/Applications/Chromium_110.app/Contents/MacOS/Chromium',
    headless: 'new',
  });
  const page = (await browser.pages())[0];

  // Navigate the page to a URL
  await page.goto('file:///Users/mschile/Projects/cypress-test-tiny/cypress/fixtures/dom.html');

  const buttonSelector = '#button';
  await page.waitForSelector(buttonSelector);
  await page.click(buttonSelector);

  const eventsSelector = await page.waitForSelector('#events')
  const eventsFired = await eventsSelector?.evaluate(el => el.textContent)
  console.log(eventsFired)

  await browser.close();
})();
