import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import { AiOutlineUser } from "react-icons/ai";
import jwt_decode from "jwt-decode";

const AddSection = () => {
  const [name, setName] = useState("");
  const [nb, setNb] = useState("");
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("");
  const [loc, setLoc] = useState("");
  const addContact = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/user/set_contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          phoneNb: nb,
          rlsStatus: status,
          email: mail,
          long: loc.split(/[, ]+/)[0],
          lat: loc.split(/[, ]+/)[1],
          token: localStorage.getItem("access_token"),
          curr_user: jwt_decode(localStorage.getItem("access_token"))._id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.code) {
        alert("Phone Number already in use");
        localStorage.setItem("err", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setNb(e.target.value);
                  console.log(nb);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setMail(e.target.value);
                  console.log(mail);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setStatus(e.target.value);
                  console.log(status);
                }}
              ></input>
            </td>
            <td>
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setLoc(e.target.value);
                  console.log(loc);
                }}
              ></input>
            </td>
            <th
              className="add"
              onClick={(e) => {
                console.log(name, mail, nb, status, loc);
                addContact();

                setTimeout(() => {
                  window.location.href = "/contact_page";
                }, 1000);
              }}
            >
              Add
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AddSection;
