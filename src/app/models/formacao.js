const { model, Schema } = require("mongoose");

const SchemaFormacao = new Schema({
  instituicao: String,
  curso: String,
  inicio: String,
  termino: String
});

module.exports = model("formacoes", SchemaFormacao);
