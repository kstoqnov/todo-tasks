import { useState, useEffect } from "react";

type ValidField = {
  value: string;
  error: string;
};

export type TODO = {
  description: ValidField;
  dueDate: string;
  isDone: boolean;
  name: ValidField;
};

export const useGetTask = (id: number) => {
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
    const fetchTaskById = async () => {
      try {
        const response = await fetch(
          `https://auto.loanvantage360.com/fps/api/todo/${id}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
            },
          }
        );
        const json = await response.json();

        setData({
          description: {
            value: json.data.description,
            error: "",
          },
          dueDate: json.data.dueDate,
          isDone: json.data.isDone,
          name: {
            value: json.data.name,
            error: "",
          },
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchTaskById();
  }, [id]);

  return { data };
};
