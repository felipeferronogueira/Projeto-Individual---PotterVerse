// src/models/casaModel.js

const database = require('../database/config');

// Modelo para buscar usuários por casa
async function getUsuariosPorCasa() {
    try {
        const instrucaoSql = `
            SELECT fkCasa, COUNT(*) as total
            FROM usuario
            GROUP BY fkCasa;
        `;

        // Chama a função executar do arquivo de configuração de banco de dados
        const resultados = await database.executar(instrucaoSql);
        
        // Retorna os resultados da consulta
        return resultados;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUsuariosPorCasa
};
