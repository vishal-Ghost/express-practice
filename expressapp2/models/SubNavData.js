const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes)=>{
    const sub_nav_bar = sequelize.define('sub_nav_bar',{
        NAV_ID:{
            type: DataTypes.STRING
        },
        SUB_NAV_ID:{
            type : DataTypes.STRING,
            primaryKey : true
        },
        FORM_ID:{
            type : DataTypes.STRING,
        },
        NAVIGATE:{
            type : DataTypes.STRING,
        },
        SUB_ELE_NAME:{
            type: DataTypes.STRING
        }

    },{
        tableName : 'sub_nav_bar',
        timestamps: false
    });

    return sub_nav_bar
}