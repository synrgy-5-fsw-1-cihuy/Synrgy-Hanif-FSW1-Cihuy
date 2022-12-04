const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/api/register/member", userController.registerMemberHandler);
router.post("/api/register/admin", userController.registerAdminHandler);
router.post("/api/login", userController.loginHandler);
router.post("/api/profile", userController.getProfileHandler);

module.exports = router;