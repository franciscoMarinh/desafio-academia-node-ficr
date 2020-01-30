const ApiGithub = require("../services/github");
const { githubQuery } = require('../helpers/querys')
// const ApiFaceBook = require("../services/facebook");

// const fbAcessToken = require("../../config/facebook");


const getGithubData = async () => {
  const { data: { data } } = await ApiGithub({
    method: 'post',
    data: {
      query: githubQuery
    }
  })
  const dataGithub = data.viewer

  const filtedNodes = dataGithub.repositories.nodes
    .sort((a, b) => {
      if (a.diskUsage < b.diskUsage) return 1;
      if (a.diskUsage > b.diskUsage) return -1;
      return 0;
    })
    .splice(0, 3)

  return {
    ...dataGithub,
    repositories: filtedNodes
  }
}


class CurriculoController {
  async get(req, res, next) {
    try {

      const githubData = await getGithubData()
      // const { data: fbData } = await ApiFaceBook.get(`/me?fields=id%2Cname%2Clocation%2Cemail%2Cgender%2Cbirthday%2Cwork%2Cabout&access_token=${fbAcessToken}`)


      // const { bio, avatarUrl, url, repositories, location } = dataGithub
      // const { name, birthday, email, gender } = fbData

      return res.json(githubData)
      // return res.json({
      //   nome: name,
      //   data_nascimento: birthday,
      //   endereco: location,
      //   email,
      //   genero: gender === 'male' ? 'masculino' : 'feminino',
      //   bio,
      //   foto: avatarUrl,
      //   github: {
      //     perfil: url,
      //     alguns_repositorios: repositories
      //   }
      // });

    } catch (error) {
      console.log(error)
      return next(error);
    }
  }
}

module.exports = new CurriculoController();
