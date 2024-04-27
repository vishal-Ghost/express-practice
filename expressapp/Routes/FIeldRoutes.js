const express = require('express');
const Router = express.Router();
const{getFieldByForm} = require('../Controllers/FieldController')

Router.route('/getFieldByForm').get(getFieldByForm);

module.exports = Router;