import React from "react";

export interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
}

export interface Todos {
  todos: Array<Todo>;
  loading?: boolean;
  error: string | null;
}

export interface InputState {
  item: Todo;
  setItem: React.Dispatch<React.SetStateAction<any>>;
}

export interface SetInputState {
  setItem: React.Dispatch<React.SetStateAction<any>>;
}
