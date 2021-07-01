var express = require("express");
var router = express.Router();
var Moto = require("../models/Moto");

/* GET página do formulário de edição com os dados que estão na tabela 
  http://localhost:4000/edit/:id
*/

router.get("/edit/:id", function (req, res, next) {
  Moto.findById(req.params.id)
    .then((moto) => {
      res.render("edit", {
        title: "Fórmulário de Edição",
        id: req.params.id,
        condition: person.condition,
        condition_desc: person.condition_desc,
        price: person.price,
        mileage: person.mileage,
      });
    })
    .catch((error) => {
      res.send("Erro ao localizar a pessoa. Erro: " + error);
    });
});

/**
Para realizar a edição do dado na tabela
  http://localhost:4000/edition/:id
 */

router.post("/edition/:id", function (req, res, next) {
  Moto.update(
    {
      condition: req.body.condition,
      condition_desc: req.body.condition_desc,
      price: req.body.price,
      mileage: req.body.mileage,
    }
    //{ where: { id: req.params.id } }
  )
    .then(function () {
      console.log("Pessoa atualizada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao atualizar a pessoa. Erro: " + error);
    });
});

module.exports = router;
