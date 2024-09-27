const express = require("express");
const priceController = require('../controllers/priceController')

const priceRouter = express.Router();

priceRouter.post("/send-calc-info", priceController);

module.exports = priceRouter;
