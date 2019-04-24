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
    hooks: {
      beforeCreate: (user, option) =>{
        user.role = 'Member'
      },
      afterCreate: (user, option) => {
        sequelize.models.Accounts.create({
          accountNumber: Math.floor(100000000 + Math.random() * 900000000),
          balance: 0,
          userId: user.id
        })
      },
      beforeDestroy: (user, option) => {
        sequelize.models.Accounts.destroy({
          where: {
            userId: user.id
          }
        })
      }
    }
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Accounts, {foreignKey: 'userId'})
    User.hasMany(models.Stock_User, {foreignKey: 'userId'})
  };
  
  return User;
};