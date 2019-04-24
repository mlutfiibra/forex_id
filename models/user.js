'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: 
    {
      type :DataTypes.STRING,
      validate :
      {
        noEmpty : true,
        isNameUnique(){
          return User.findOne(
            {where : {
                name : this.name,
                id : {[Op.not] : this.id}
              }
            })
            .then(result=>{
              if(result){
                throw new Error(`Name already exists`)
              }
            })
        }
      }
    },
    email:
    {
      type: DataTypes.STRING,
      validate:
      {
        isEmail : true,
        isEmailUnique(){
          return User.findOne({
            where :{
              email : this.email,
              id : {
                [Op.not] : this.id
              }
            }
          }).then(result=>{
            if(result){
              throw new Error('Email already exists')
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
      hooks:
      {
        afterCreate: (user, option) => {
          user.role = 'Member'
          return sequelize.models.Accounts.create()
          .then(vlue=>{
            // console.log(`berhasil`);
          })
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Stock, { through: models.Stock_User, foreignKey: 'userId' })
    User.hasOne(models.Accounts, {foreignKey: 'userId'})
  };
  return User;
};