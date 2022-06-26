import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import AddSection from "./components/AddSection";
import Search from "./components/Search";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/contact_page" element={<Contacts />}></Route>
        <Route path="/add_contact" element={<AddSection />}></Route>
        <Route path="/search_contact" element={<SearchSection />}></Route>
        <Route
          path="/edit"
          element={
            <div className="contain">
              <Navbar />
              <Search />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
