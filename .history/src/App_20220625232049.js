import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { AiOutlineUser } from "react-icons/ai";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/contact_page" element={<Contacts />}></Route>
        <Route
          path="/add_contact"
          element={
            <>
              <Navbar />
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Marital Status</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <AiOutlineUser className="iconn" />
                    <td>
                      <input type="text"></input>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th
                      className="del"
                      onClick={(e) => {
                        console.log("DEELEETE");
                      }}
                    >
                      Delete
                    </th>
                  </tr>
                </tbody>
              </table>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
