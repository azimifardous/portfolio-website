import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AnimatedCursor from "react-animated-cursor";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AnimatedCursor color="255,255,255" />
  </React.StrictMode>
);
