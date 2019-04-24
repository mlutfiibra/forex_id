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
    return queryInterface.bulkInsert('User', [
      {
        name: 'Admin',
        email: 'admin@forex.com',
        password: '1234',
        role: 'Administrator'
      },
      {
        name: 'Dienul',
        email: 'dienul@forex.com',
        password: '1234',
        role: 'Member'
      },
      {
        name: 'Lutfi',
        email: 'lutfi@forex.com',
        password: '1234',
        role: 'Member'
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
    return queryInterface.bulkDelete('User', null, {});
  }
};
