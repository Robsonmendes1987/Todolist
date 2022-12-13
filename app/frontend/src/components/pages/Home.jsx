import { Container, List } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "../pages/style.scss";
import Form from "./Form";
import api from "../../services/api";

import { Link } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState(true);

  //FUNÇAO QUE RECEBE OS DADOS
  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  //FUNÇAO PARA DELETAR LISTA
  const deleteList = async (id) => {
    await api.delete(`newtodo/${id}`);
    setList(!list);
  };

  const hedleLogin = async () => {
    const todo = await api.get("newtodo");

    setTodos(todo.data);
  };

  useEffect(() => {
    hedleLogin();
  }, [list]);

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Link to={"/"}> Voltar a pagina de cadastro </Link>

      <Form todoHandler={todoHandler} setList={setList} list={list} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <li className="li" key={todo.id}>
            <div>
              {todo.todolist}
              <button type="submit" onClick={() => deleteList(todo.id)}>
                Delet
              </button>
            </div>
          </li>
        ))}
      </List>
    </Container>
  );
}
