const formidableMiddleware = require("formidable");
const bycrypt = require('bcrypt');
const jwtTokenUtil = require('../util/jwt_util.js');
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

const loginHandler = async (req, res) => {
    const form = formidableMiddleware({});
    form.parse(req, async (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        try{
            const email = fields.email
            
            const userByEmail = await User.findOne(
                { where: {email: email} }
            );

            if(userByEmail == null) {
                res.status(400).json({
                    error: "User account not found. Please register first"
                });
            };

            const checkAccountPassword = await bycrypt.compare(fields.password, userByEmail.password);

            if(checkAccountPassword == false) {
                res.status(401).json({error: "Email r Password incorrect. Please try again."})
                return;
            };

            const tokenGenerated = jwtTokenUtil.encodeTokenJwt({
                id: userByEmail.id,
                email: userByEmail.email
            });

            res.status(200).json({
                message: "Logged Succesfully",
                token: tokenGenerated
            });
            return;
        } catch(err){
            res.status(422).json({error: "Error created user"});
            throw err;
        };
    });

};


module.exports = {registerUser, loginHandler};