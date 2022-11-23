const formidableMiddleware = require("formidable");
const bycrypt = require('bcrypt');
const models = require("../models");
const User = models.User;
const saltRounds = 10;

const registerUser = async (req, res) => {
    const form = formidableMiddleware({});

    form.parse(req, async (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        try{
            // Hashing password
            const hashedPassword = await bycrypt.hash(fields.password, saltRounds);
            // Create 
            const user = await User.create({
                email: fields.email,
                password: hashedPassword
            });
            
            res.status(201).json({
                message: "Registered Succesfully",
                data: {
                    id: user.id,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            })
            return;
        } catch(err){
            res.status(422).json({error: "Error created user"});
            throw err;
        }
    });
};

module.exports = {registerUser};