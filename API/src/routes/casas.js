const express = require('express');
const router = express.Router();
const casaController = require('../controllers/casaController');

// Rota para buscar usuários por casa
router.get('/usuariosPorCasa', casaController.getUsuariosPorCasa);

module.exports = router;

