import React from "react";
import { Container, Typography, useTheme, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useGetTask } from "../hooks/use-get-task";
import { useEditTask } from "../hooks/use-edit-task";
import { FormComponent } from "../shared/form-component";

export const UpdateTask = () => {
  const API = "https://auto.loanvantage360.com/fps/api/todo";
  const {
    state: { id },
  } = useLocation();

  const { data } = useGetTask(id);
  const { data: todo, setData, editTodo } = useEditTask(data);

  const { spacing } = useTheme();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    editTodo(id, API);
  };

  return (
    <Container maxWidth="xs">
      <Box
        marginTop={spacing(8)}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography component="h1" variant="h5">
          Edit Task
        </Typography>
        <FormComponent
          todo={todo}
          handleSubmit={handleSubmit}
          setTask={setData}
          variantForm={"edit"}
        />
      </Box>
    </Container>
  );
};

UpdateTask.displayName = "UpdateTask";
