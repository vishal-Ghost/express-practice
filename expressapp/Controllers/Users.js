const db = require('../Connect');

const getAllUsers = (req,res)=>{
    const allUsers = 'SELECT * FROM USERS';
    db.query(allUsers,(err,result)=>{
        err ? res.send(err) : res.send(result);
    })

};

const getUser = (req,res)=>{
    const allUsers = `SELECT * FROM USERS where user_name in (${ typeof req.query.userName === 'object' ?  [...req.query.userName].map((mres)=>{
        return JSON.stringify(mres)
    }) : JSON.stringify(req.query.userName)}) and user_pass  = ${JSON.stringify(req.query.password)}`

    db.query(allUsers,(err,result)=>{
        err ? res.send(err) : res.send(result);
    })

};

module.exports = {getAllUsers,getUser}