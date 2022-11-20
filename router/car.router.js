const { response } = require("express");
const express = require("express");
const router = express.Router();
const formidableMiddleware = require("formidable");
const models = require("../models");
const Car = models.Car;

// GET ALL
router.get("/api/cars", (req, res) => {
    Car.findAll().then(result => {
        res.status(200).json({data: result});
    });
});

// GET BY ID
router.get("/api/cars/:id", (req, res) => {
    Car.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({message: "Car not found"});
            return;
        }
        res.status(200),json({data: result});
    });
});

// POST
// router.post("/api/cars", (req, res) => {

// });

// PUT
// router.put("/api/cars/:id", (req, res) => {

// });

// DELETE
// router.delete("/api/cars/:id", (req, res) => {

// });

module.exports = router;