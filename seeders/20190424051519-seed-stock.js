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
        buy: 50000,
        sell: 51000,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Bank BCA',
        alias: 'BCA',
        description: 'PT Bank Central Asia Tbk adalah bank swasta terbesar di Indonesia.',
        buy: 60000,
        sell: 61000,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Microsoft',
        alias: 'MSFT',
        description: 'Microsoft didirikan untuk mengembangkan dan menjual penerjemah BASIC untuk Altair 8800.',
        buy: 77000,
        sell: 80000,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Google LLC',
        alias: 'GOOG',
        description: 'Google LLC[5] adalah sebuah perusahaan multinasional Amerika Serikat yang berkekhususan pada jasa dan produk Internet. ',
        buy: 83000,
        sell: 84000,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Apple Inc.',
        alias: 'APPL',
        description: 'Apple Inc. adalah perusahaan teknologi multinasional yang berpusat di Cupertino, California, yang merancang, mengembangkan, dan menjual barang elektronik konsumen, perangkat lunak komputer, dan layanan daring.',
        buy: 87000,
        sell: 89000,
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
