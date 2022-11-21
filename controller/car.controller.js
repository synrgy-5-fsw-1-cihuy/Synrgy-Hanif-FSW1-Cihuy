const formidableMiddleware = require("formidable");
const cloudinaryConfig = require("../config/cloudinary.js");
const models = require("../models");
const Car = models.Car;

// All Car Handler
const getAllCarHandler = (req, res) => {
    Car.findAll().then(result => {
        res.status(200).json({
            data: result
        });
    }).catch(err => {
        console.error(err);
        throw err;
    });
};

// Car By ID Handler
const getCarByIdHandler = (req, res) => {
    Car.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({
                message: "Car not found"
            });
            return;
        }
        res.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    });
};

// Create Car Handler
const postCarHandler = (req, res) => {
    const form = formidableMiddleware({});

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
            res.end("Data not complete");
            return;
        };

        cloudinaryConfig.uploader.upload(files.photo.filepath, function(err, result) {
            if (err) {
                next(err);
                return;
            };

            Car.create({
                name: fields.name,
                price: fields.price,
                size: fields.size,
                photo: result.secure_url
            }).then(result => {
                res.status(201).json({
                    message: "Car added", 
                    body: fields
                });
            });
        });
    });
};

// PUT Car Handler
const putCarHandler = (req, res) => {
    const form = formidableMiddleware({});

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
            res.end("Data not complete");
            return;
        };

        Car.findByPk(req.params.id).then(result => {
            if(result == null) {
                res.status(404).json({
                    message: "Car not found"
                });
                return;
            }
            
            cloudinaryConfig.uploader.upload(files.photo.filepath, function(err, result) {
                if (err) {
                    next(err);
                    return;
                };
                // Still not sure how to handle the new photo url
                Car.update(fields, {where: {id: req.params.id}}).then(result => {
                    res.status(202).json({
                        message: "Car updated",
                        data: result
                    });
                }).catch(err => {
                    console.error(err);
                    throw err;
                });
            });
        }).catch(err => {
            console.error(err);
            throw err;
        });
    });
};

// Delete Car Handler
const deleteCarHandler = (req, res) => {
    Car.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({
                message: "Car not found"
            });
            return;
        }
        
        Car.destroy({where: {id: req.params.id}}).then(result => {
            res.status(202).json({
                message: "Car deleted"
            });
        }).catch(err => {
            console.error(err);
            throw err;
        });

    }).catch(err => {
        console.error(err);
        throw err;
    });
};

module.exports = {getAllCarHandler, getCarByIdHandler, postCarHandler, putCarHandler, deleteCarHandler};