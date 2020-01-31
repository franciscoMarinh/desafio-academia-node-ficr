const app = require('../../src/app')
const request = require('supertest')(app)


describe('Rotas', () => {
    test("verifica se todos os atributos estão na resposta", async () => {
        let result
        for (let i = 0; i < 25; i++) {
            result = await request.get('/').send()
        }
        expect(result.status).toBe(429)

    })
})