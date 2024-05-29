var express = require("express");
var router = express.Router();
const medidaController = require("../controllers/medidaController");

router.get("/resumo/:usuarioId/:quiz", medidaController.getResumo);
router.get("/ranking/:quizId", medidaController.getRanking);

module.exports = router;
