const puppeteer = require('puppeteer-serverless')

/**
 * 
 * @param html HTML Page
 */

const getImage = async html => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 600, height: 300 })
    await page.setContent(html)
    return await page.screenshot({ type: "png" })
}

module.exports = getImage