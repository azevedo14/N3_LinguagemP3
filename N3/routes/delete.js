var express = require("express");
var router = express.Router();
var Moto = require("../models/Moto");

router.get("/delete/:id", function (req, res, next) {
  Moto.deleteOne({ _id: req.params.id })
    .then(function () {
      res.redirect("/list");
    })
    .catch((error) => {
      res.send("Erro ao excluir a pessoa. Erro: " + error);
    });
});

module.exports = router;
