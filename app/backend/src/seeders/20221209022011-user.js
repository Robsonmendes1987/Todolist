'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('user',
  [{
    email: 'robsonmendes1987@hotmail.com',
    password: '1234'
  }] )
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('user', null, {});
  }
};