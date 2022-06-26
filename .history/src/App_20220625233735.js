import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contacts";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import { AiOutlineUser } from "react-icons/ai";

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
                      <input
                        type="text"
                        className="input"
                        onChange={(e) => {
                          setName(e.target.value);
                          console.log(name);
                        }}
                      ></input>
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
