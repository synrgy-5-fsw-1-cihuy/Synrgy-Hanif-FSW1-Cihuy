const repository = require("../repositories/user.repository.js");

// const doGetAllCars = async () => {
//     return await repository.getAll();
// };

const doGetUserById = async (id) => {
    return await repository.getById(id);
};

const doGetUserByEmail = async (email) => {
    return await repository.getByEmail(email);
};

const doCreateMember = async (data) => {
    return await repository.insertOne(data);
};

const doUpdateCar = async (data, id) => {
    return await repository.update(data, id);
};

const doDeleteCarById = async (id) => {
    return await repository.deleteCarById(id);
}

module.exports = {doGetUserById, doGetUserByEmail, doCreateMember, doUpdateCar, doDeleteCarById};