import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    todoReducer: todoReducer,
  },
});

// State of out application
export type RootState = ReturnType<typeof store.getState>;

// Dispatch type
export type AppDispatch = typeof store.dispatch;
