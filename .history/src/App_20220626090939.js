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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/contact_page" element={<Contacts />}></Route>
        <Route path="/add_contact" element={<AddSection />}></Route>
        <Route
          path="/search_contact"
          element={
            <div className="contain">
              <Navbar />
              <div className="search_bar_container">
                <input
                  type="text"
                  placeholder="type here"
                  className="search_bar"
                ></input>
                <br />
                <select className="Drop">
                  <option>Filter By--</option>
                  <option>Name</option>
                  <option>Email</option>
                  <option>Phone Number</option>
                </select>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;