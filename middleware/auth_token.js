const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authToken (req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({error: "Unauthorized access"});

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        if (decoded == null) {
            res.status(401).json({error: "Unautorized access"});
        };

        next();
    } catch(err) {
        res.status(401).json({error: "Unauthorized access"});
        throw err;
        return;
    };
}

module.exports = authToken;