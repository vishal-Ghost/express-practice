const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes)=>{
    const sample = Sequelize.define('sample',{
        name:{
            type : DataTypes.STRING,
            allowNull : false
        },
        last_name:{
            type : DataTypes.STRING,
            allowNull:false
        }
    })

    return sample
}