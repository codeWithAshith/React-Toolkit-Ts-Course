import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// npm install -g json-server
// To run
// npm run serve-json

root.render(
  <React.StrictMode>
    <p>Hello World</p>
  </React.StrictMode>
);
