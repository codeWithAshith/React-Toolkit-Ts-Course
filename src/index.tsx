import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Tailwind setup - https://tailwindcss.com/docs/guides/create-react-app

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Provider>
  </React.StrictMode>
);
