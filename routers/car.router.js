const express = require("express");
const router = express.Router();
const carController = require("../controllers/car.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

// GET ALL
router.get("/api/cars", authMiddleware, carController.getAllCarHandler);

// GET BY ID
router.get("/api/cars/:id", authMiddleware, carController.getCarByIdHandler);

// POST
router.post("/api/cars", authMiddleware, carController.postCarHandler);

// PUT
router.put("/api/cars/:id", authMiddleware, carController.putCarHandler);

// DELETE
router.delete("/api/cars/:id", authMiddleware, carController.deleteCarHandler);

module.exports = router;