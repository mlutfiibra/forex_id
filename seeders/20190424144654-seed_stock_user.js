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
    return queryInterface.bulkInsert('Stock_Users', [
      {
        stockId: 1,
        userId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 2,
        userId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 3,
        userId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 1,
        userId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 2,
        userId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 3,
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
    return queryInterface.bulkDelete('Stock_Users', null, {});
  }
};
