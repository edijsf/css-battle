import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./userWorker";
import { NotificationProvider } from "./contexts/NotificationContext";
import ThemeWrapper from "./contexts/ThemeWrapper";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <NotificationProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </NotificationProvider>
    </AuthProvider>
  </React.StrictMode>
);
