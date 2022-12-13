import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import "../pages/style.scss";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const hedleLogin = async ({ email, password }) => {
    try {
      await api.post("/user", { email, password });
      navigate("/newtodo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(hedleLogin)}>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <div className=".login">
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
          />
          <Button type="submit" variant="contained">
            Enter
          </Button>
        </div>
      </Container>
    </form>
  );
}
