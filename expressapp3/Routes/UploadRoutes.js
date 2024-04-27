const express = require("express");
const {handlePostUser} = require('../Controllers/UploadsControllers')
const router = express.Router();

router.route('/upload').post(handlePostUser)

module.exports = router;