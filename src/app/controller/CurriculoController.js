//models
const expModel = require("../models/experienciaProfissional");
const formacaoModel = require("../models/formacao");
//helpers
const getGithubData = require("../helpers/getGithubData");
//services
const { facebook } = require("../services/axios");

class CurriculoController {
  async get(req, res, next) {
    try {
      const [
        dataGithub,
        dataFacebook,
        formacao,
        experience
      ] = await Promise.all([
        getGithubData(),
        facebook(
          `/me?fields=id%2Cname%2Clocation%2Cemail%2Cgender%2Cbirthday%2Cwork%2Cabout`
        ),
        formacaoModel.find().select(["-_id", "-__v"]),
        expModel.find().select(["-_id", "-__v"])
      ]);

      const { bio, avatarUrl, url, repositories, location } = dataGithub;
      const { name, birthday, email, gender } = dataFacebook.data;

      const data = {
        nome: name,
        data_nascimento: birthday,
        endereco: location,
        email,
        genero: gender === "male" ? "masculino" : "feminino",
        bio,
        foto: avatarUrl,
        formacao,
        experiencia_profissional: experience,
        github: {
          perfil: url,
          alguns_repositorios: repositories
        }
      };
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CurriculoController();
