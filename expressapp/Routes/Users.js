const express = require('express');
const Router = express.Router();

const {getAllUsers,getUser} = require('../Controllers/Users')

Router.route('/allUsers').get(getAllUsers);
Router.route('/user').get(getUser);

module.exports = Router;