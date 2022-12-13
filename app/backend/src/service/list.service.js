const { Todo } = require("../models");

const createNewTodo = async (todolist) => {
  const newTodo = await Todo.create({ todolist });
  return newTodo;
};

const getListById = async (id) => {
  const user = await Todo.findByPk(id);
  return user;
};

const getAll = async () => {
  const users = await Todo.findAll();

  return users;
};

const updateList = async (id, todolist) => {
  const [updatedList] = await Todo.update({ todolist }, { where: { id } });
  return updatedList;
};

const deleteList = async (id) => {
  const list = await Todo.destroy({ where: { id } });
  return list;
};

module.exports = {
  createNewTodo,
  updateList,
  getAll,
  getListById,
  deleteList,
};
