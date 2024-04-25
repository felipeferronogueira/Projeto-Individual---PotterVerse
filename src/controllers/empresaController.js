var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var casa = req.query.casaId;

  empresaModel.buscarPorCnpj(casaId).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var casaId = req.body.casaId;

  empresaModel.buscarPorCnpj(casaId).then((resultado) => {
      empresaModel.cadastrar(casaId).then((resultado) => {
        res.status(201).json(resultado);
      });
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
