import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authProvider";
import { SocketContext, socket } from "./Context/socket";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SocketContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);