import { Delete } from "@mui/icons-material";
import { Box, IconButton, Input, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const TodoItem = ({ text, id, handleDelete, isChecked, completeTodo }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: "100%",
        pl: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Input
        type="checkbox"
        checked={isChecked}
        sx={{ marginRight: 2 }}
        onChange={() => completeTodo(id)}
      />
      <Box sx={{ textAlign: "start" }}>
        <Typography
          sx={{ textDecoration: `${isChecked ? "line-through" : "none"}` }}
          variant="p"
        >
          {text}
        </Typography>
      </Box>
      <IconButton
        onClick={() => handleDelete(id)}
        sx={{ marginLeft: 1 }}
        color="primary"
        aria-label="delete"
      >
        <Delete />
      </IconButton>
    </Paper>
  );
};

export default TodoItem;
