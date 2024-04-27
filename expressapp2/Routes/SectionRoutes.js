const express = require('express');
const Router = express.Router();
const {getSectionByForm} = require('../Controllers/SectionController')

Router.route('/getSectionByForm').get(getSectionByForm);

module.exports = Router