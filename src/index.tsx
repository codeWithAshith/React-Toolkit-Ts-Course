import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoComponent from "./components/Todo.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// npm install react-icons --save

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoComponent/>
    </Provider>
  </React.StrictMode>
);
