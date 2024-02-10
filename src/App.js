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
import { useState } from "react";
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
    setTodoList([...todoList, todo]);
    setTodo({ item: "", id: "" });
    console.log("list: ", todoList);
    console.log("todo: ", todo);
  }

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        gap: 2,
        flexDirection: "column",
        // justifyContent: "center",
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
            required
          ></Input>
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </Paper>
      </Box>
      <Box>
        {todoList.map((el, index) => (
          <TodoItem key={index} text={el.item} id={el.id} />
        ))}
      </Box>
    </Container>
  );
}

export default App;

/*<Container>
      <Typography variant="h1">h1. Header</Typography>
      <Typography variant="h2">h2. Header</Typography>
      <Typography variant="h3" mb={3}>
        h3. Header
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Hello</Button>
        <Button href="#" variant="outlined" onClick={() => alert("clicked")}>
          Link
        </Button>

        <Button variant="contained" startIcon={<Delete />}>
          Delete
        </Button>

        <IconButton color="warning" aria-label="delete">
          <Delete />
        </IconButton>
      </Stack>
      <Box sx={{ display: "flex", gap: 2 }}>
        {userList.map((el) => {
          return (
            <Paper sx={{ p: 1 }} elevation={3}>
              <Typography variant="h6">{el}</Typography>
            </Paper>
          );
        })}
      </Box>
    </Container>*/
