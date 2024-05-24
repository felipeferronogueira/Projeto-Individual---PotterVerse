const medidaModel = require("../models/medidaModel");

function getResumo(req, res) {
    const usuarioId = req.params.usuarioId;
    const quiz = req.params.quiz;

    medidaModel.getResumo(usuarioId, quiz)
      .then(resultado => {
        const resumo = resultado.map(item => ({
            idPontuacao: item.idPontuacao,
            acertos: item.qtdAcertos
        }));
           res.status(200).json(resumo);
       })
      .catch(erro => {
           console.log(erro);
           console.log("Houve um erro ao buscar o resumo.", erro.sqlMessage);
           res.status(500).json(erro.sqlMessage);
       });
}

module.exports = {
    medidaModel,
    getResumo
};
