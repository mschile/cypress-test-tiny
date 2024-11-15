// to run: node example.js

const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async () => {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('file:////Users/mschile/Projects/cypress-test-tiny/cypress/fixtures/dom.html');
    await driver.manage().setTimeouts({implicit: 500});
  
    let el = await driver.findElement(By.id('p'));
  
    await el.click();
  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
})();
