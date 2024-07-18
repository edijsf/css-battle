import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Play from "./pages/Play";
import SingUp from "./pages/SignUp";
import AdminPanel from "./pages/AdminPanel";
import AdminSingUp from "./pages/AdminSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/play/:gameId" element={<Play />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-signup" element={<AdminSingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
