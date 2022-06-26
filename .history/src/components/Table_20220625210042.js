import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Table = () => {
  useEffect(() => {
    const id=jwt_decode(localStorage.getItem("access_token"))
    axios.
  }, []);
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
