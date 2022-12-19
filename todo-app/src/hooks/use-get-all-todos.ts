import { useState, useEffect } from "react";
import { TODOS } from "../types";

export const useGetAllTodos = (api: string) => {
  const [data, setData] = useState<Array<TODOS>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getListTodos = async () => {
      try {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
          },
        });
        const json = await response.json();
        setData(json.data);
      } catch (error: unknown) {
        if (typeof error === "string") {
          setError(error);
        }
      }
    };

    getListTodos();
  }, [api]);

  return {
    data,
    error,
  };
};
