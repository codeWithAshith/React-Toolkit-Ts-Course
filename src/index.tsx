import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoComponent from "./components/Todo.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Redux Thunk: Allows you to write asynchronous logic in your Redux actions.
// Axios : A simple promise based HTTP client for the browser and node.js

// npm install redux-thunk axios

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoComponent />
    </Provider>
  </React.StrictMode>
);
