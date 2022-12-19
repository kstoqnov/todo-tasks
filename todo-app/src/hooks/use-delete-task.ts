import { useState } from "react";

export const useDeleteTask = (api: string) => {
  const [isDeleteTodo, setDeleteTodo] = useState<boolean>(false);

  const deleteTask = (id: number) => () => {
    fetch(`${api}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          setDeleteTodo(true);
        }
      });
  };

  return {
    isDeleted: isDeleteTodo,
    deleteTodo: deleteTask,
  };
};
