const medidaModel = require("../models/medidaModel");
const database = require("../database/config"); // Certifique-se de que o caminho para o módulo de configuração do banco de dados está correto

const getResumo = (usuarioId, quiz) => {
  try {
    const instrucaoSql = `
            SELECT 
                idPontuacao, 
                qtdAcertos 
            FROM 
                pontuacao 
            WHERE 
                fkUsuario = ${usuarioId} AND 
                fkQuiz = ${quiz}
            ORDER BY 
                idPontuacao;
        `;

    const resultado = database.executar(instrucaoSql);

    return resultado;
  } catch (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o resumo.", erro.sqlMessage);
    return [];
  }
};

module.exports = {
  getResumo
};
