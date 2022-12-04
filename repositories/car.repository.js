const models = require('../models');
const Car = models.Car;

const getAll = async () => {
    return await Car.findAll();
};

const getById = async (id) => {
    return await Car.findByPk(id);
};

const insertOne = async (data) => {
    return await Car.create(data);
};

const update = async (data, id) => {
    return await Car.update(data, {where: {"id": id}});
};

const destroy = async (id) => {
    return await Car.destroy({
        Where: {id: id}
    });
};

module.exports = {getAll, getById, insertOne, update, destroy};