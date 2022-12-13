import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useForm } from "react-hook-form";
import "./style.scss";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const hedleLogin = async ({ email, password }) => {
    try {
      const token =  await api.post("/login", { email, password });
      api.defaults.headers.common.Authorization = token.data.token;
      console.log(token.data)

      navigate("/newtodo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(hedleLogin)}>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <div className=".login">
          <h1> Pagina de login </h1>
          <TextField
            {...register("email")}
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <TextField
            {...register("password")}
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
          />
          <Button type="submit" variant="contained">
            Enter
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </Button>
        </div>
      </Container>
    </form>
  );
}
