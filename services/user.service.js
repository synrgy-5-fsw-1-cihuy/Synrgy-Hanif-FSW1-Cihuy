const repository = require("../repositories/user.repository.js");

const doGetUserById = async (id) => {
    return await repository.getById(id);
};

const doGetUserByEmail = async (email) => {
    return await repository.getByEmail(email);
};

const doCreateUser = async (data) => {
    return await repository.insertOne(data);
};

module.exports = {doGetUserById, doGetUserByEmail, doCreateUser};