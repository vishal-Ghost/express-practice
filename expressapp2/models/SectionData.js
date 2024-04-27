const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const section_data = sequelize.define('section_data',{
        SECTION_ID :{
            type : DataTypes.STRING,
            primaryKey :true
        },
        SECTION_NAME :{
            type : DataTypes.STRING,
        },
        SECTION_NO:{
            type : DataTypes.STRING,
        },
        FORM_ID:{
            type : DataTypes.STRING,
        }
    },{
        timestamps:false
    });
    return section_data
}