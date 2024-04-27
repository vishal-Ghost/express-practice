const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>{
    const navbar_data = sequelize.define('navbar_data',{
        NAV_ID:{
            type: DataTypes.STRING,
            primaryKey : true
        },
        NAV_NAME:{
            type: DataTypes.STRING,
        },
        IS_DROPDOWN:{
            type : DataTypes.STRING,
        },
        FORM_ID:{
            type : DataTypes.STRING,
        },
        NAVIGATE:{
            type : DataTypes.STRING,
        },
        ORDER_NO:{
            type : DataTypes.STRING,
        }
    },{
        timestamps:false
    });

    return navbar_data
}