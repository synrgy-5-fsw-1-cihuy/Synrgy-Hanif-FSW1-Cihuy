const repository = require("../repositories/car.repository.js");

const doGetAllCars = async () => {
    return await repository.getAll();
};

const doGetCarById = async (id) => {
    return await repository.getById(id);
};

const doCreateCar = async (data) => {
    return await repository.insertOne(data);
};

const doUpdateCar = async (data, id) => {
    return await repository.update(data, id);
};

const doDeleteCarById = async (id) => {
    return await repository.deleteCar(id);
};

module.exports = {doGetAllCars, doGetCarById, doCreateCar, doUpdateCar, doDeleteCarById};