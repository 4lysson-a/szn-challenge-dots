import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MarkContextProvider } from "./MarkContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MarkContextProvider>
      <App />
    </MarkContextProvider>
  </React.StrictMode>
);
