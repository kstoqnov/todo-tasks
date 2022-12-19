import { Grid, TextField, Switch, Button, useTheme } from "@mui/material";
import { TODO } from "../hooks/use-get-task";

type Form = {
  todo: TODO;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  setTask: (todo: TODO) => void;
  variantForm: "create" | "edit";
};

export const FormComponent: React.FC<Form> = ({
  handleSubmit,
  setTask,
  todo,
  variantForm,
}) => {
  const { spacing } = useTheme();

  const variantTextButton =
    variantForm === "create" ? "Create Task" : "Edit Task";

  const buttonDisable =
    todo.description.error !== "" ||
    todo.name.error !== "" ||
    todo.description.value === "" ||
    todo.name.value === "";

  return (
    <form
      style={{
        width: "100%",
        marginTop: spacing(3),
      }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            multiline
            rows={5}
            maxRows={50}
            autoComplete="description"
            name="description"
            variant="outlined"
            required
            fullWidth
            label="Description"
            onChange={(e) =>
              setTask({
                ...todo,
                description: {
                  value: e.target.value,
                  error:
                    todo.description.value.length >= 500
                      ? "text cannot be larger than 500 characters"
                      : "",
                },
              })
            }
            autoFocus
            value={todo.description.value}
            helperText={todo.description.error}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="Date"
            type="datetime-local"
            onChange={(e) =>
              setTask({
                ...todo,
                dueDate: `${e.target.value}`,
              })
            }
            InputLabelProps={{
              shrink: true,
            }}
            value={todo.dueDate ?? "2020-05-24"}
          />
        </Grid>
        <Grid item xs={12}>
          <Switch
            checked={todo.isDone}
            onChange={(event) =>
              setTask({ ...todo, isDone: event.target.checked })
            }
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            onChange={(e) =>
              setTask({
                ...todo,
                name: {
                  value: e.target.value,
                  error:
                    todo.name.value.length >= 100
                      ? "text cannot be larger than 100 characters"
                      : "",
                },
              })
            }
            value={todo.name.value}
            helperText={todo.name.error}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          margin: spacing(3, 0, 2),
        }}
        disabled={buttonDisable}
      >
        {variantTextButton}
      </Button>
    </form>
  );
};

FormComponent.displayName = "FormComponent";
