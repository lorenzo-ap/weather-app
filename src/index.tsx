import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div className="flex flex-col justify-center items-center md:h-screen mx-auto">
    <App />
  </div>
);
