const express = require('express');
const Router = express.Router();
const { getAllSubNav } = require('../Controllers/SubNavController');

Router.route('/getSubNav').get(getAllSubNav);

module.exports = Router;