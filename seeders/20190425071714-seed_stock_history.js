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
    return queryInterface.bulkInsert('stock_histories', [
      {
        stockId: 1,
        buy: 600,
        sell: 590,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 1,
        buy: 590,
        sell: 590,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 1,
        buy: 610,
        sell: 590,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 1,
        buy: 630,
        sell: 620,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 1,
        buy: 650,
        sell: 620,
        createdAt: new Date,
        updatedAt: new Date
      },
      
      {
        stockId: 2,
        buy: 600,
        sell: 640,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 2,
        buy: 620,
        sell: 645,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 2,
        buy: 630,
        sell: 646,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 2,
        buy: 630,
        sell: 650,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 2,
        buy: 650,
        sell: 660,
        createdAt: new Date,
        updatedAt: new Date
      },

      {
        stockId: 3,
        buy: 605,
        sell: 620,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 3,
        buy: 600,
        sell: 624,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 3,
        buy: 600,
        sell: 540,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 3,
        buy: 600,
        sell: 600,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        stockId: 3,
        buy: 610,
        sell: 640,
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
    return queryInterface.bulkDelete('stock_histories', null, {});
  }
};
