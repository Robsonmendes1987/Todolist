import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useForm } from "react-hook-form";
import "./style.scss";

export default function Regiter() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const hedleRegister = async ({ email, password }) => {
    try {
      await api.post("/user/register", { email, password });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(hedleRegister)}>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <div className=".login">
          <h1>Registre-se</h1>
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
            REGISTER
          </Button>
        </div>
      </Container>
    </form>
  );
}
