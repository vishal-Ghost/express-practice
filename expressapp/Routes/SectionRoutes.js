const express = require('express');
const { getSectionByForm } = require('../Controllers/SectionController');
const Router = express.Router();


Router.route('/getSectionByForm').get(getSectionByForm);

module.exports = Router;