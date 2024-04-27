const {sub_nav_bar}=require('../models')

const getSubNav = (req,res)=>{
    sub_nav_bar.findAll().then((val)=>{
        res.send(val)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {getSubNav}