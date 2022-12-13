
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todolist', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todolist: {
        allowNull: false,
        type: Sequelize.STRING,
      },

    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('list')

  }
};