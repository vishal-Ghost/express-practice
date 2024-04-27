const express = require('express');
const Router = express.Router();
const {getSubNav} = require('../Controllers/SubNavController')

Router.route('/getSubNav').get(getSubNav);

module.exports = Router;