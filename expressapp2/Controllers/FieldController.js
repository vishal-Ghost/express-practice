const {form_field_data} = require('../models')
const fs = require('fs')

const getFIeldByForm = (req,res)=>{
    form_field_data.findAll({
        where:{
            FORM_ID: req.query.formId
        }
    }).then((val)=>{
        res.send(val)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {getFIeldByForm}