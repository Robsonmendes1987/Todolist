module.exports = ( sequelize, DataTypes) => {
  const List = sequelize.define('Todo', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    todolist: {
      type: DataTypes.STRING,
      allowNull: false,
    },

   
  }, 
  {
    timestamps: false,
    tableName: 'todolist',
    underscored: true,
  })
 
  return List

}