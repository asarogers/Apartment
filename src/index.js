import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./compoments/counter.jsx"; //import the counter class, which returns a hello world
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //defines what shows on the screen
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

