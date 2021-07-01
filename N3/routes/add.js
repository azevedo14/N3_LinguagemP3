var express = require("express");
var router = express.Router();
var Moto = require("../models/Moto");

/* GET página do formulário de adição 
  http://localhost:4000/form
*/

router.get("/form", function (req, res, next) {
  res.render("add", { title: "Fórmulário" });
});

/**
  http://localhost:4000/add
 */

router.post("/add", function (req, res, next) {
  Moto.create({
    condition: req.body.condition,
    condition_desc: req.body.condition_desc,
    price: req.body.price,
    mileage: req.body.mileage,
  })
    .then(function () {
      console.log("Pessoa cadastrada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao cadastrar a pessoa. Erro: " + error);
    });
});

module.exports = router;
