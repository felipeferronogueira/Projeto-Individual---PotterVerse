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
        // Cria um novo array labels onde cada item é uma string representando a tentativa com base no índice.
        res.status(200).json(resumo);
      })
      .catch(erro => {
          console.log("Houve um erro ao buscar o resumo.", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

function getRanking(req, res) {
    const quizId = req.params.quizId;

    medidaModel.getRanking(quizId)
      .then(resultado => {
          console.log('Resultado do getRanking:', resultado); 
          res.status(200).json(resultado);
      })
      .catch(erro => {
          console.log("Houve um erro ao buscar o ranking.", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

module.exports = {
    getResumo,
    getRanking
};
