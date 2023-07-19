import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    todoReducer: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// State of out application
export type RootState = ReturnType<typeof store.getState>;

// Dispatch type
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
