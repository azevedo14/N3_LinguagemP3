var express = require("express");
var router = express.Router();
var Moto = require("../models/Moto");

/* GET página de listagem de pessoas 
  http://localhost:4000/list
*/

router.get("/list", function (req, res, next) {
  Moto.find().then(function (moto) {
    res.render("list", { title: "Listagem de Motos", moto: moto });
    console.log(moto);
  });
});

module.exports = router;
