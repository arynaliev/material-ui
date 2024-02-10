import { Delete } from "@mui/icons-material";
import { IconButton, Input, Paper, Typography } from "@mui/material";
import React from "react";

const TodoItem = ({ text, id }) => {
  return (
    <Paper
      sx={{ width: "50%", display: "flex", justifyContent: "space-between" }}
    >
      <Input type="checkbox" />
      <Typography variant="p" sx={{ fontWeight: "bold" }}>
        {text}
      </Typography>
      <IconButton color="primary" aria-label="delete">
        <Delete />
      </IconButton>
    </Paper>
  );
};

export default TodoItem;
