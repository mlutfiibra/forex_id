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
    return queryInterface.bulkInsert('Stock', [
      {
        name: 'Bank Mandiri',
        alias: 'BAM',
        buy: 500,
        sell: 510
      },
      {
        name: 'Bank BCA',
        alias: 'BCA',
        buy: 600,
        sell: 610
      },
      {
        name: 'PT. Indofood',
        alias: 'IDF',
        buy: 570,
        sell: 590
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
  }
};
