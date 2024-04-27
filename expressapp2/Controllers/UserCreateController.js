const { sequelize } = require("../models");
const fs = require('fs')

const createUser = (req,res)=>{
    // let userDetail = JSON.parse(req.query.userDetails);
    // console.log( userDetail)
    // console.log(req.body)
    let userDetail = req.body
    let file_detail = req.file

    
    const userQuery = `CALL UserCreation(${JSON.stringify( userDetail.USER_NAME)},${JSON.stringify(userDetail.USER_PASS)},${JSON.stringify(userDetail.FIRST_NAME)},${JSON.stringify(userDetail.LAST_NAME)},${Number(userDetail.PHONE)},${JSON.stringify(userDetail.EMAIL)},${JSON.stringify(userDetail.ADDRESS)},${JSON.stringify(userDetail.DOB)},${JSON.stringify(file_detail.originalname)},${JSON.stringify(file_detail.size)})`;


    sequelize.query(userQuery).then((val)=>{
        res.send(val)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {createUser}