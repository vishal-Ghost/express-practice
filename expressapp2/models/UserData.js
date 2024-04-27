const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>{
    const users = sequelize.define('users',{
        USER_ID:{
            type: DataTypes.STRING,
            primaryKey : true
        },
        USER_NAME :{
            type: DataTypes.STRING,
        },
        USER_PASS:{
            type: DataTypes.STRING,
        },
        USER_ROLE:{
            type: DataTypes.STRING,
        },
        ADDRESS:{
            type: DataTypes.STRING,
        },
        DOB:{
            type : DataTypes.DATE
        },
        EMAIL:{
            type: DataTypes.STRING,
        },
        FIRST_NAME:{
            type: DataTypes.STRING,
        },
        LAST_NAME:{
            type: DataTypes.STRING,
        },
        PHONE:{
            type : DataTypes.STRING
        },
        PROFILE_PIC:{
            type : DataTypes.BLOB
        }
    },{
        timestamps : false
    });

    return users
}