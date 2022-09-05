
const express = require("express");
const userController = require("../controllers/user.controller");
const validateRequest = require("../middlewares/checkValidations")
const router = express.Router();

router.post('/signup', validateRequest.checkIncomingRequest, userController.createUser);

module.exports = router;