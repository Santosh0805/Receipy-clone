import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Components/Home";
import Profile from "./Pages/Profile";
import RecipeDetail from "./Pages/RecipeDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login />} />
        <Route path = "/recipe/:id"element={<RecipeDetail/> } />
      </Routes>
    </>
  );
}

export default App;
