const ApiGithub = require("../services/github");
const ApiFaceBook = require("../services/facebook");

const fbAcessToken = require("../../config/github");

class CurriculoController {
  async get(req, res, next) {
    try {
      const { data } = await ApiGithub.request("/user");
      // const { data: facebookDataUser } = await api.get(`/me?fields=id%2Cname&access_token=${fbAcessToken}`)
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CurriculoController();
