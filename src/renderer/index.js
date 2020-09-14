const puppeteer = require('puppeteer-core')
const chrome = require('chrome-aws-lambda')

/**
 * 
 * @param html HTML Page
 */

const getImage = async html => {
    const options = await getOptions()
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()
    await page.setViewport({ width: 600, height: 300 })
    await page.setContent(html)
    return await page.screenshot({ type: "png" })
}

const getOptions = async isDev => {
    return {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  };

module.exports = getImage