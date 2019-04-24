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
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@forex.com',
        password: '1234',
        role: 'Administrator',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Dienul',
        email: 'dienul@forex.com',
        password: '1234',
        role: 'Member',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Lutfi',
        email: 'lutfi@forex.com',
        password: '1234',
        role: 'Member',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
