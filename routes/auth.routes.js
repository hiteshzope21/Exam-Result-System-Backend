
const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();


router.post('/resultsystem/api/auth/signup', authController.signup);
router.post('/resultsystem/api/auth/signin', authController.signin);
module.exports = router;