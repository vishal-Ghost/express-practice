const db = require("../Connect")

 const getFieldByForm = (req,res) =>{
    const fieldQuery = `SELECT * FROM form_field_data WHERE FORM_ID = ${JSON.stringify(req.query.formId)}`

    db.query(fieldQuery,(err,response)=>{
        err ? res.send(err) : res.send(response)
    })
};

module.exports = {getFieldByForm};