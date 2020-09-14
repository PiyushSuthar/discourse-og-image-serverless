const axios = require('axios').default
const parseDate = require('../utils/dateParser')

/**
 * 
 * @param {URL} url Discourse Forum URL
 */
const fetchData = async url => {
    const data =  await (await axios.get(url+".json")).data
    const category = await getCategoryById(url, data.category_id)
    return parseData(data, category)
}

/**
 * 
 * @param {URL} url 
 * @param {String} id 
 */

const getCategoryById = async (url, id) => {
    const parsedURL = new URL(url)
    const rebuiltUrl = `https://${parsedURL.hostname}/categories.json`
    const data = await (await axios.get(rebuiltUrl)).data
    const category = data.category_list.categories.filter(cate => cate.id === id)
    return category
}

/**
 * 
 * @param {Object} data 
 * @param {Object} category 
 */

const parseData = (data, category) => {
    return {
        title: data.title,
        category: category,
        date: parseDate(data.created_at),
        views: data.views,
        likes: data.like_count,
        replies: data.posts_count
    }
}

module.exports = fetchData