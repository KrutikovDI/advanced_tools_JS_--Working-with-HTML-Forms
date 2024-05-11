import puppeteer from "puppeteer"

jest.setTimeout(30000);
describe ('проверка появления подсказки', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });
  
  test('наводим курсор на кнопку', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.button-conteiner');

    const button = await page.$('.button');

    await button.hover();

    await page.waitForSelector('.tooltip-conteiner');
  });

  afterEach(async () => {
    await browser.close();
  });
});
