import { useNavigate } from "react-router-dom";
import { TODO } from "./use-get-task";

export const useCreateTask = () => {
  const navigate = useNavigate();

  const createTask = async (api: string, todo: TODO) => {
    await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          navigate("/");
        }
      });
  };

  return {
    createTodo: createTask,
  };
};
