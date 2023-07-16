import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Redux: The core library enables the redux architecture.
// React Redux: Simplifies connecting your React components to the Redux store.
// React Toolkit: Intended to be the standard way to write Redux logic.
// Redux DevTools Extension: Connects your Redux application to Redux DevTools
//
// npm install redux react-redux redux-devtools-extension @reduxjs/toolkit

// 1. Create Store with empty reducer
// 2. Add redux provider and connect to the store in Index.ts
// 3. Create slice with initialState and return reducer
// 4. Import the reducer in store and add it to the reducer.

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <p>Hello World</p>
    </Provider>
  </React.StrictMode>
);
