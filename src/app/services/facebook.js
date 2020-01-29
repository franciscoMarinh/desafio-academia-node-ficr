const axios = require('axios').default

const api = axios.create({
    baseURL: "https://graph.facebook.com/v5.0/"
})

module.exports = api