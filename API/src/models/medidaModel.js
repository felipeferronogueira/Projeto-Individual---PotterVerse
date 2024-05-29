const database = require("../database/config");

const getResumo = (usuarioId, quiz) => {
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
    return database.executar(instrucaoSql);
};

const getRanking = (quizId) => {
    const instrucaoSql = `
        SELECT 
            u.nome, 
            p.maxAcertos 
        FROM 
            (
                SELECT 
                    fkUsuario, 
                    MAX(qtdAcertos) AS maxAcertos 
                FROM 
                    pontuacao 
                WHERE 
                    fkQuiz = ${quizId}
                GROUP BY 
                    fkUsuario
            ) AS p 
            JOIN usuario AS u ON p.fkUsuario = u.id 
        ORDER BY 
            p.maxAcertos DESC, 
            u.id ASC 
        LIMIT 3;
    `;
    return database.executar(instrucaoSql);
};

module.exports = {
    getResumo,
    getRanking
};
