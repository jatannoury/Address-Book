import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Table = () => {
  useEffect(async () => {
    
    try {
      const res = await fetch(`http://localhost:3001/api/user/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await res.json();
      console.log(data);
      if (data["token"]) {
        localStorage.setItem("access_token", data["token"]);
        window.location.href = "/contact_page";
        return data;
      }
    } catch (error) {
      alert("Wrong username or password");
    }
  }
  )}
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <AiOutlineUser className="iconn" />
          <td>fdsaf</td>
          <td>fdsaf</td>
          <td>fdsaf</td>
          <td>fdsaf</td>
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
  );
};

export default Table;
