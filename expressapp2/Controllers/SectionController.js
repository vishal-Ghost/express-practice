const {section_data} = require('../models')

const getSectionByForm = (req,res)=>{
    section_data.findAll({
        where:{
            FORM_ID : req.query.formId
        }
    }).then((val)=>{
        res.send(val)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {getSectionByForm}