const db = require("../Connect")

const getAllSubNav = (req,res) =>{
    const subNavQuery = 'SELECT * FROM SUB_NAV_BAR'
    db.query(subNavQuery,(err,result)=>{
        err ? res.send(err) : res.send(result)
    })
}

module.exports = {getAllSubNav}