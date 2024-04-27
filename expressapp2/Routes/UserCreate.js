const express = require('express');
const Router = express.Router();
const {createUser} = require('../Controllers/UserCreateController')

Router.route('/createUser').post(createUser);

module.exports = Router;