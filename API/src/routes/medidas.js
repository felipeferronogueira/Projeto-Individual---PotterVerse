const express = require("express");
const router = express.Router();
const medidaController = require("../controllers/medidaController");

router.get("/resumo/:usuarioId/:quiz", medidaController.getResumo);

module.exports = router;
