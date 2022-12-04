const { where } = require('sequelize');
const models = require('../models');
const User = models.User;

const getAll = async () => {
    return await User.findAll();
};

const getById = async (id) => {
    return await User.findByPk(id);
};

const getByEmail = async (email) => {
    return await User.findOne({where: {"email": email}});
}

const insertOne = async (data) => {
    return await User.create(data);
};

const update = async (data, id) => {
    return await User.update(data, {where: {"id": id}});
};

const destroy = async (id) => {
    return await User.destroy({
        Where: {id: id}
    });
};

module.exports = {getAll, getById, getByEmail, insertOne, update, destroy};