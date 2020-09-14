const fetchData = require("../src/fetcher")
const getImage = require("../src/renderer")
const generateHtml = require("../src/renderer/template")

/**
 * 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */

module.exports = async (req, res) => {
    const { url } = req.query
    if(!url){
        res.statusCode = 404
        res.send({
            error: "Please provide ?url of the discourse forum page!"
        })
    }
    try {
        const data = await fetchData(url)
        const html = generateHtml(data)
        const image = await getImage(html)
        res.statusCode = 200;
        res.setHeader('Content-Type', `image/png`)
        res.setHeader('Cache-Control', `public, max-age=1800`)
        res.end(image)
    } catch (err) {
        res.statusCode = 500
        res.send({
            error: "Either the url you gave is incorrect or there's some error on our server! :("
        })
    }
}