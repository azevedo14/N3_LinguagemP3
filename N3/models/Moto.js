const mongoose = require("mongoose");

const Moto = new mongoose.Schema(
  {
    condition: {
      type: String,
      required: true,
    },
    condition_desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    mileage: {
      type: String,
      required: true,
    },
  },
  { collection: "motos" }
);

module.exports = mongoose.model("Moto", Moto);
