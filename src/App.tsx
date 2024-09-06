import React from "react";
import List from "./components/List";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./pages/User";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
