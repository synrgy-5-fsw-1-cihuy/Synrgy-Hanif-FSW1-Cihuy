const express = require("express");
const router = express.Router();
const carController = require("../controller/car.controller.js");


// GET ALL
router.get("/api/cars", carController.getAllCarHandler);

// GET BY ID
router.get("/api/cars/:id", carController.getCarByIdHandler);

// POST
router.post("/api/cars", carController.postCarHandler);

// PUT
router.put("/api/cars/:id", carController.putCarHandler);

// DELETE
router.delete("/api/cars/:id", carController.deleteCarHandler);

module.exports = router;