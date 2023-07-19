import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Todo, Todos } from "../../interface/AppInterface";
import apiModules from "../../api/service";
import { RootState } from "../store";

const initialState: Todos = {
  todos: [],
  loading: false,
  error: null,
};

export const getAllTodos = createAsyncThunk("todos/getAll", async () => {
  const res = await apiModules.getAllTodo();
  const data: Todo[] = await res.data;
  return data;
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, { rejectWithValue }) => {
    const res = await apiModules.deleteTodo(id);
    if (res.status === 200) {
      return id;
    } else {
      rejectWithValue("Not found");
    }
  }
);

export const addTodo = createAsyncThunk("todos/addTodo", async (todo: Todo) => {
  const res = await apiModules.postTodo(todo);
  const data: Todo = await res.data;
  return data;
});

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo) => {
    const res = await apiModules.updateTodo(todo);
    const data: Todo = await res.data;
    return data;
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.pending, (state: Todos) => {
      state.loading = true;
    });
    builder.addCase(getAllTodos.fulfilled, (state: Todos, { payload }) => {
      state.loading = false;
      state.todos = payload;
    });
    builder.addCase(getAllTodos.rejected, (state: Todos, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to fetch todos.";
    });
    builder.addCase(deleteTodo.pending, (state: Todos) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state: Todos, { payload }) => {
      state.loading = false;
      state.todos = state.todos.filter((t) => t.id !== payload);
    });
    builder.addCase(deleteTodo.rejected, (state: Todos, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to delete todo.";
    });
    builder.addCase(addTodo.pending, (state: Todos) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state: Todos, { payload }) => {
      state.loading = false;
      state.todos.push(payload);
    });
    builder.addCase(addTodo.rejected, (state: Todos, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to add todo.";
    });
    builder.addCase(updateTodo.pending, (state: Todos) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state: Todos, { payload }) => {
      state.loading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        } else return todo;
      });
    });
    builder.addCase(updateTodo.rejected, (state: Todos, { error }) => {
      state.loading = false;
      state.error = error.message ?? "Failed to update todo.";
    });
  },
});

export default todoSlice.reducer;
