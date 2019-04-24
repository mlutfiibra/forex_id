'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
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
    User.hasOne(models.Accounts ,{foreignKey: 'userId'})
  };
  
  return User;
};