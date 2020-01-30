const ApiGithub = require("../services/github");
const ApiFaceBook = require("../services/facebook");

const fbAcessToken = require("../../config/facebook");
const sortGithubReps = require('../helpers/sortGithubReps')

class CurriculoController {
  async get(req, res, next) {
    try {
      const {data: userDataGit} = await ApiGithub.request("/user");
      const {data: dataFb} = await ApiFaceBook.get(`/me?fields=id%2Cname%2Clocation%2Cemail%2Cgender%2Cbirthday%2Cwork%2Cabout&access_token=${fbAcessToken}`)
      const {data: reposDataGit} = await ApiGithub.request("/user/repos");

      const githubReps = sortGithubReps(reposDataGit).splice(0,3)

      console.log(userDataGit)

      const { bio, avatar_url, html_url } = userDataGit
      const { name, birthday, location, email, gender } = dataFb

      return res.json({
        nome: name,
        data_nascimento: birthday,
        endereco: location.name,
        email,
        genero: gender === 'male' ? 'masculino' : 'feminino',
        bio,
        foto: avatar_url,
        github: {
          perfil: html_url,
          alguns_repositorios: githubReps
        }
        

      });
    } catch (error) {
      console.log(error)
      return next(error);
    }
  }
}

module.exports = new CurriculoController();
