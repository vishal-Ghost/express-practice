const express = require('express');
const Router = express.Router();
const {getAllNavEle} = require('../Controllers/NavController')

Router.route('/nav').get(getAllNavEle);

module.exports = Router