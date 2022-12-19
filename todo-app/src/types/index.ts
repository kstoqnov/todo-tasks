export type TODOS = {
  id: number;
  description: string;
  dueIn: string;
  isDone: boolean;
  name: string;
};

export type Columns = {
  name: string;
  align: "center" | "right" | "left" | "inherit" | "justify" | undefined;
}[];