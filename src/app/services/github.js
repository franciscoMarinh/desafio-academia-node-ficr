const axios = require("axios").default;
const auth = require("../../config/github");

module.exports = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${auth}`
  }
})

