const app = require('../../src/app')
const experienceModel = require('../../src/app/models/experienciaProfissional')


describe('Rotas', () => {
    test("verifica se todos os atributos estão na resposta", async () => {
        const result = await experienceModel.find()
        expect(result.length).toBeGreaterThan(0)
    })
})