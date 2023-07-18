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
    removeTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {},
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
