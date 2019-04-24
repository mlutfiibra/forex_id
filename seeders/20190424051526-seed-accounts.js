'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Accounts', [
      {
        accountNumber: 123456789,
        balance: 100000,
        userId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        accountNumber: 987654321,
        balance: 140000,
        userId: 3,
        createdAt: new Date,
        updatedAt: new Date
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
