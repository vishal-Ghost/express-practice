const db = require("../Connect")

const getAllNavEle = (req,res)=>{
    const getNavQuery = 'SELECT * FROM navbar_Data ORDER BY ORDER_NO'
    db.query(getNavQuery,(err,result)=>{
        err ? res.send(err) : res.send(result)
    })
}

module.exports = {getAllNavEle}