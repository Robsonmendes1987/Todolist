const ListService = require("../service/list.service");
const createNewTodo = async (req, res) => {
  const { todolist} = req.body
  const newTodo = await ListService.createNewTodo(todolist);
console.log('CONTOLLER',req.body)
  res.status(201).json(newTodo);
};

 const getAllList = async (_req, res) => {
    try {
      const list = await ListService.getAll();
      return res.status(200).json(list);
    } catch (e) {
      res.status(500).json({ message: 'Ocorreu um erro' });
    }
  };

const getListById = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await ListService.getListById(id);

    if (!list) return res.status(404).json({ message: 'Tarefa não encontrada' });

    return res.status(200).json(list);
  } catch (e) {

    res.status(500).json({ message: 'Algo deu errado' });
  }
};


const updateList = async (req, res) => {
  const { todolist } = req.body
  const { id } = req.params
  const updateList = await ListService.updateList(id, todolist)
  res.status(200).json(updateList)
}

const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    await ListService.deleteList(id);

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};


module.exports = {
  createNewTodo,
  updateList,
  getListById,
  getAllList,
  deleteList,
}
