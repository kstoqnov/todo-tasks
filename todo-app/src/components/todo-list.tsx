import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  ButtonGroup,
  useTheme,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useGetAllTodos } from "../hooks/use-get-all-todos";
import { useDeleteTask } from "../hooks/use-delete-task";
import { Columns } from "../types";

export const TodoList = () => {
  const API = "https://auto.loanvantage360.com/fps/api/todo";

  const { data } = useGetAllTodos(API);
  const { isDeleted, deleteTodo } = useDeleteTask(API);

  const { spacing, palette } = useTheme();

  const navigate = useNavigate();

  const updateTodo = (id: number) => () => {
    navigate(`/edit`, {
      state: {
        id,
      },
    });
  };

  const columns: Columns = [
    { name: "ID", align: "right" },
    { name: "Description", align: "center" },
    { name: "Date", align: "left" },
    { name: "Done", align: "left" },
    { name: "Name", align: "left" },
    { name: "Status", align: "left" },
    { name: "Action", align: "center" },
  ];

  if (isDeleted) {
    return null;
  }

  const tableData = data.map((task) => {
    return {
      ...task,
      status: task.isDone ? "completed task" : "task that is not completed",
    };
  });

  return (
    <Box flexGrow={1}>
      <Container
        sx={{
          marginTop: spacing(2),
        }}
        maxWidth="lg"
      >
        <Paper
          sx={{
            padding: spacing(2),
            color: palette.text.secondary,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingBottom={1}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Task List
            </Typography>

            <Link to="/create">
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  textDecoration: "none",
                }}
              >
                ADD Task
              </Button>
            </Link>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="todos table">
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell
                      align={col.align}
                      key={Math.random().toString(36).slice(2, 9)}
                    >
                      {col.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((todo) => (
                  <TableRow key={todo.id}>
                    <TableCell align="right">{todo.id}</TableCell>
                    <TableCell align="center">
                      <Typography> {todo.description} </Typography>
                    </TableCell>
                    <TableCell align="left">{todo.dueIn}</TableCell>
                    <TableCell align="left">
                      <Checkbox checked={todo.isDone} />
                    </TableCell>
                    <TableCell align="left">{todo.name}</TableCell>
                    <TableCell align="left">{todo.status}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button onClick={updateTodo(todo.id)}>Edit</Button>
                        <Button onClick={deleteTodo(todo.id)}>Delete</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
};

TodoList.displayName = "TodoList";
