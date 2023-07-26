import React from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Stock } from "./pages/Stock";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/estoque" Component={Stock} />
      </Routes>
    </div>
  );
}

export default App;
