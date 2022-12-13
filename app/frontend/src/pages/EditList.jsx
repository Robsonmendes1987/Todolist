import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { TextField } from "@mui/material";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditList({ open, hendleOPen, todo, edit }) {
  const [text, setText] = useState(todo.text);

  //FUNÇAO QUE ESTA EDITANDO DE FATO A LISTA DE TAREFAS
  const handlerText = () => {
    edit(todo.id, text);
    hendleOPen();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={hendleOPen}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>{"Editando Tarefa"}</DialogTitle>

      <DialogContent>
        <TextField
          defaultValue={text}
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={hendleOPen}>Cancelar</Button>
        <Button onClick={handlerText}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
