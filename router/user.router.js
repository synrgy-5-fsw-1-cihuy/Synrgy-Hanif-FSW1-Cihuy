const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller.js");
const authMiddleware = require('../middleware/auth_token.js');

// POST
router.post('/api/auth/register', userController.registerUser);

router.post('/api/auth/login', authMiddleware ,userController.loginHandler);

module.exports = router;