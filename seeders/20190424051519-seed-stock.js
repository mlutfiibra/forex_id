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
    return queryInterface.bulkInsert('Stocks', [
      {
        name: 'Bank Mandiri',
        alias: 'BAM',
        description: 'Bank Mandiri adalah bank yang berkantor pusat di Jakarta, dan merupakan bank terbesar di Indonesia dalam hal aset, pinjaman, dan deposit.',
        buy: 500,
        sell: 510,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Bank BCA',
        alias: 'BCA',
        description: 'PT Bank Central Asia Tbk adalah bank swasta terbesar di Indonesia.',
        buy: 600,
        sell: 610,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'PT. Indofood',
        alias: 'IDF',
        description: 'PT. Indofood Sukses Makmur Tbk. (IDX: INDF) dan PT. Indofood CBP Sukses Makmur Tbk.',
        buy: 570,
        sell: 590,
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
    return queryInterface.bulkDelete('Stocks', null, {});
  }
};
