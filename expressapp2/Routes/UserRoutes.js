const express = require('express');
const Router = express.Router();
const {getUser,getAllUsers} = require('../Controllers/UserControllers')

Router.route('/user').get(getUser);
Router.route('/allUsers').get(getAllUsers);

module.exports = Router;