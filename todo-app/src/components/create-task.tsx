import React, { useState } from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";

import { FormComponent } from "../shared/form-component";
import { TODO } from "../hooks/use-get-task";
import { useCreateTask } from "../hooks/use-create-task";

export const CreateTask = () => {
  const API = "https://auto.loanvantage360.com/fps/api/todo";
  const [task, setTask] = useState<TODO>({
    description: {
      value: "",
      error: "",
    },
    dueDate: "",
    isDone: false,
    name: {
      value: "",
      error: "",
    },
  });

  const { createTodo } = useCreateTask();

  const { spacing } = useTheme();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo(API, task);
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
          Task
        </Typography>
        <FormComponent
          todo={task}
          handleSubmit={handleSubmit}
          setTask={setTask}
          variantForm={"create"}
        />
      </Box>
    </Container>
  );
};

CreateTask.displayName = "CreateTask";
