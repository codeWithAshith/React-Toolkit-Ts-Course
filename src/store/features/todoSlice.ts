import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
}
interface Todos {
  todos: Todo[];
}

const initialState: Todos = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
