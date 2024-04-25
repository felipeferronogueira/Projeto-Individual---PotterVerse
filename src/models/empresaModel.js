var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM casaHogwarts WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM casaHogwarts`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(casa) {
  var instrucaoSql = `SELECT * FROM casaHogwarts WHERE casa = '${casaHogwartsId}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(casa) {
  var instrucaoSql = `INSERT INTO casaHogwarts(casa) VALUES ('${casaHogwartsId}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
