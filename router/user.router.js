const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller.js");

// POST
router.post('/api/auth/register', userController.registerUser);


module.exports = router;