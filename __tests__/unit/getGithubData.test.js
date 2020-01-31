const app = require('../../src/app')
const getGithubData = require('../../src/app/helpers/getGithubData')

describe('Obter dados do Github', () => {
    test("verifica se a API do github está retornando dados", async () => {
        const githubData = await getGithubData()
        expect(githubData).toHaveProperty('repositories')
    })
})