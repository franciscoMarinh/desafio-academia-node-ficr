const app = require('../../src/app')
const request = require('supertest')(app)


describe('Rotas', () => {

    beforeAll(() => {

    })

    test("verifica se todos os atributos estão na resposta", async (done) => {
        const result = await request.get('/api/curriculo')
        expect(result).toBe(20)
        done()
    })
})