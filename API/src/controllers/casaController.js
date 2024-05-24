const casaModel = require('../models/casaModel');

// Controlador para buscar usuários por casa
async function getUsuariosPorCasa(req, res) {
  try {
    const usuariosPorCasa = await casaModel.getUsuariosPorCasa();
    res.json(usuariosPorCasa);
  } catch (error) {
    console.error('Erro ao buscar usuários por casa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = {
  getUsuariosPorCasa
};