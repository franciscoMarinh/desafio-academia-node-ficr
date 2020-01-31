const { model, Schema } = require('mongoose')

const SchemaExpProfissional = new Schema({
    empresa: String,
    funcao: String,
    atividade: String,
    inicio: String,
    termino: String
})


module.exports = model('experiencia_profissionals', SchemaExpProfissional)

