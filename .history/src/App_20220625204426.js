import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import Table from "./components/Table";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route
          path="/contact_page"
          element={<Contacts/>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
