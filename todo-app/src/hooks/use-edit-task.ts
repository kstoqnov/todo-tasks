import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TODO } from "./use-get-task";

export const useEditTask = (todo: TODO) => {
  const [data, setData] = useState<TODO>({
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

  useEffect(() => {
    setData(todo);
  }, [todo]);

  const navigate = useNavigate();

  console.log(data)

  const editTodo = async (id: number, api: string) => {
    await fetch(api, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
      },
      body: JSON.stringify({ id, ...data }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["status"] === "ok") {
          navigate("/");
        }
      });
  };

  return {
    data,
    setData,
    editTodo,
  };
};
