const express = require('express');
const Router = express.Router()

const {getNavEle} = require('../Controllers/NavController')

Router.route('/nav').get(getNavEle);

module.exports = Router;