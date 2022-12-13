import { Button, TextField, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import api from "../../services/api";

export default function Form({ todoHandler, list, setList }) {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitTodo = async ({ todolist }) => {
    await api.post("newtodo", { todolist });
    setList(!list);
    reset();
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <form
        style={{ display: "fles", justifyContent: "center" }}
        onSubmit={handleSubmit(handleSubmitTodo)}
      >
        <Button type="submit" variant="text">
          Add
        </Button>
        <TextField
          {...register("todolist")}
          type="text"
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          fullWidth
        />
      </form>
    </Paper>
  );
}
