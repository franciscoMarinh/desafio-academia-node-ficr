const axios = require("axios").default;
const fbAcessToken = require("../../config/facebook");
const gitAcessToken = require("../../config/github");

class AxiosController{
    async facebook(query){
      return await axios.get(`https://graph.facebook.com/v5.0/${query}&access_token=${fbAcessToken}`)
    }

    async github(query, method){
      const response = await axios({
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${gitAcessToken}`
        },
        method,
          data: {
            query
          }
      })

      return response.data.data.viewer

    }
}

module.exports = new AxiosController()
