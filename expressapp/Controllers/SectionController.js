const db = require("../Connect");

const getSectionByForm = (req,res) =>{
    const secQuery = `select * from SECTION_DATA WHERE FORM_ID = ${JSON.stringify(req.query.formId)}`;
    db.query(secQuery,(err,result)=>{
        err ? res.send(err) : res.send(result)
    })
}

module.exports = {getSectionByForm}