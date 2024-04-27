const { Op } = require('sequelize');
const {users} = require('../models');

const getUser = (req,res) =>{
    users.findAll({
        where :{
            [Op.and] : [{
                USER_NAME : req.query.userName,
                USER_PASS :  req.query.password
            }]
        }
    }).then((val)=>{
        res.send(val)
    }).catch((err)=>{
        console.log(err)
    })
}

const getAllUsers = (req,res) =>{
    users.findAll().then((val)=>{
        res.send(val)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {getUser,getAllUsers}