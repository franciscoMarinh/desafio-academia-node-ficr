const app = require('../../src/app')
const request = require('supertest')(app)


describe('Rotas', () => {
    test("verifica se todos os atributos estão na resposta", async () => {
        const result = await request.get('/').send()
        expect(result.status).toBe(404)
    })
})