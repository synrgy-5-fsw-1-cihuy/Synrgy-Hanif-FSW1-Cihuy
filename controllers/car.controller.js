const formidableMiddleware = require("formidable");
const cloudinaryConfig = require("../config/cloudinary.js");
const models = require("../models");
const Car = models.Car;
const carService = require("../services/car.service.js")

// All Car Handler
const getAllCarHandler = async (req, res) => {
    try{
        const cars = await carService.doGetAllCars();
        res.status(200).json({data: cars});
    }

    catch(err) {
        console.error(err);
        throw err;
    }
};

// Car By ID Handler
const getCarByIdHandler = async (req, res) => {
    try{
        const carById = await carService.doGetCarById(req.params.id, res);

        if (carById == null) {
            res.status(404).json({message: `Car not found with id: ${req.params.id}`});
            return;
        };

        res.status(200).json({data: carById});
    }

    catch(err){
        console.error(err);
        throw err;
    }
};

// Create Car Handler
const postCarHandler = async (req, res) => {
    const form = formidableMiddleware({});

    try{
        form.parse(req, async (err, fields, files) => {
            if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
                res.end("Data not complete");
                return;
            };
    
            const uploadedFile = await cloudinaryConfig.uploader.upload(files.photo.filepath);
    
            const carPayload = {
                name: fields.name,
                price: fields.price,
                size: fields.size,
                photo: uploadedFile.secure_url
            };
    
            const carCreated = await carService.doCreateCar(carPayload);
    
            return res.status(201).json({
                message: "Car successfully created",
                body: carCreated
            });
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
    
};

// PUT Car Handler
const putCarHandler = async (req, res) => {
    const form = formidableMiddleware({});

    try{
        const carById = await carService.doGetCarById(req.params.id, res);

        if (carById == null) {
            res.status(404).json({message: `Car not found with id: ${req.params.id}`});
            return;
        };

        form.parse(req, async (err, fields, files) => {
            if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
                res.end("Data not complete");
                return;
            };

            const uploadedFile = await cloudinaryConfig.uploader.upload(files.photo.filepath);

            const carPayload = {
                name: fields.name,
                price: fields.price,
                size: fields.size,
                photo: uploadedFile.secure_url
            };

            const carUpdated = await carService.doUpdateCar(carPayload, req.params.id);
            return res.status(201).json({
                message: "Car successfully updated",
                body: carPayload
            });
        });
        
    }

    catch(err){
        console.error(err);
        throw err;
    }

    // form.parse(req, (err, fields, files) => {

    //     if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
    //         res.end("Data not complete");
    //         return;
    //     };

    //     Car.findByPk(req.params.id).then(result => {
    //         if(result == null) {
    //             res.status(404).json({
    //                 message: "Car not found"
    //             });
    //             return;
    //         }
            
    //         cloudinaryConfig.uploader.upload(files.photo.filepath, function(err, result) {
    //             if (err) {
    //                 next(err);
    //                 return;
    //             };
    //             // Still not sure how to handle the new photo url
    //             Car.update(fields, {where: {id: req.params.id}}).then(result => {
    //                 res.status(202).json({
    //                     message: "Car updated",
    //                     data: result
    //                 });
    //             }).catch(err => {
    //                 console.error(err);
    //                 throw err;
    //             });
    //         });
    //     }).catch(err => {
    //         console.error(err);
    //         throw err;
    //     });
    // });
};

// Delete Car Handler
const deleteCarHandler = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Car.delete(id, res);
        // const delCarById = await carService.doGetCarById(req.params.id, res);

        if (data == null) {
            res.status(404).json({message: `Car not found with id ${id}`});
            return;
        };
        data.destroy();

        res.status(204);
    }

    catch(err){
        console.error(err);
        throw err;
    }
};

module.exports = {getAllCarHandler, getCarByIdHandler, postCarHandler, putCarHandler, deleteCarHandler};