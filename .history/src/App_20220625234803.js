import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import AddSection from "./components/AddSection";

function App() {
  const [name, setName] = useState("");
  const [nb, setNb] = useState("");
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("");
  const [loc, setLoc] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/contact_page" element={<Contacts />}></Route>
        <Route path="/add_contact" element={<AddSection />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
