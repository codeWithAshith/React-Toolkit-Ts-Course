import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo, Todos } from "../../interface/AppInterface";
import axios from "../../utils/config";

const initialState: Todos = {
  todos: [],
  loading: false,
};

export const getAllTodos = createAsyncThunk("todos/getAll", async () => {
  const res = await axios.get("/todos");
  const data: Todo[] = await res.data;
  return data;
});

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
    builder.addCase(getAllTodos.rejected, (state: Todos) => {
      state.loading = false;
    });
  },
});

export default todoSlice.reducer;
