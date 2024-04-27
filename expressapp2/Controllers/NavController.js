const {navbar_data} = require('../models')

const getNavEle = (req,res)=>{
navbar_data.findAll({
    order :[
        ['ORDER_NO','ASC']
    ]
}).then((val)=>{
    res.send(val)
}).catch((err)=>{
    console.log(err)
})
};

module.exports = {getNavEle}