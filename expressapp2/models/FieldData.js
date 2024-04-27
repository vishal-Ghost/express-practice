
module.exports = (sequelize,DataTypes) =>{
    const form_field_data = sequelize.define('form_field_data',{
        FIELD_ID:{
            type : DataTypes.STRING,
            allowNull : false,
            primaryKey : true
        },
        FIELD_NAME:{
            type : DataTypes.STRING,
            allowNull:true
        },
        FIELD_STORE:{
            type : DataTypes.STRING,
            allowNull:true
        },
        FIELD_TYPE:{
            type : DataTypes.STRING,
            allowNull:true
        },
        FORM_ID:{
            type : DataTypes.STRING,
            allowNull:true
        },
        ORDER_NO:{
            type : DataTypes.STRING,
            allowNull:true
        },
        SECTION_ID:{
            type : DataTypes.STRING,
            allowNull:true
        }
    },{
        timestamps : false
    });

    return form_field_data
}