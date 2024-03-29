import "./App.css";
import {
  Box,
  Button,
  Container,
  Input,
  Paper,
  Typography,
} from "@mui/material";

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({ item: "", id: "" });

  function handleChange(e) {
    setTodo({ item: e.target.value, id: uuidv4() });
    console.log(todo);
  }

  function handleClick() {
    if (todo.item) {
      setTodoList([...todoList, todo]);
      setTodo({ item: "", id: "" });
    }
    console.log("list: ", todoList);
    console.log("todo: ", todo);
  }

  function completeTodo(id) {
    setTodoList([
      ...todoList.map((el) =>
        el.id === id ? { ...el, isChecked: !el.isChecked } : el
      ),
    ]);
  }

  function handleDelete(id) {
    setTodoList([...todoList.filter((el) => el.id !== id)]);
  }

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        gap: 2,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Todo List</Typography>

      <Box>
        <Paper sx={{ py: 1, px: 3, display: "flex", gap: 2 }} elevation={10}>
          <Input
            value={todo.item}
            placeholder="add plan todo"
            onChange={handleChange}
          ></Input>
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </Paper>
      </Box>
      <Box
        sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 1 }}
      >
        {todoList.map((el, index) => (
          <TodoItem
            key={index}
            text={el.item}
            id={el.id}
            isChecked={el.isChecked}
            handleDelete={handleDelete}
            completeTodo={completeTodo}
          />
        ))}
      </Box>
    </Container>
  );
}

export default App;
