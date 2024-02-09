import "./App.css";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const userList = ["Samsung", "Iphone", "Xiaomi"];

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
