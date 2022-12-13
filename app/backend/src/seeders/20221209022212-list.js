'use strict';
/** @type{import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('todolist',
  [{
    todolist: 'quaqur coisa'
  }] )
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('todolist', null, {});
  }
};
