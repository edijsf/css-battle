import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./userWorker";
import { NotificationProvider } from "./contexts/NotificationContext";
import ThemeWrapper from "./contexts/ThemeWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </NotificationProvider>
  </React.StrictMode>
);
