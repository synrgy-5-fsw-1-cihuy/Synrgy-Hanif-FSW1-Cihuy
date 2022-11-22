const carRepository = require('../repository/car.repository.js');


const doGetAllCars = async () => {
    return await carRepository.findAllCar();
};

const doGetCarById = async (id) => {
    return await carRepository.findCarById(id);
    // const carById = await carRepository.findCarById(id);

    // return carById;
};

const doDeleteCarById = async (id) => {
    return await carRepository.deleteCarById(id);
    // const deleteCarById = await carRepository.deleteCarById(id);

    // return deleteCarById;
}

module.exports = {doGetAllCars, doGetCarById, doDeleteCarById};