const express = require('express');
const Router = express.Router();
const {getFIeldByForm} = require('../Controllers/FieldController')

Router.route('/getFIeldByForm').get(getFIeldByForm) ;

module.exports = Router