import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { type } from "@testing-library/user-event/dist/type";

const Table = () => {
  const [info, setInfo] = useState({});
  async function delContact(phoneNb) {
    try {
      console.log(phoneNb);
      const res = await fetch(`http://localhost:3001/api/user/delete_contact`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
    } catch (error) {
      console.log("error", error);
    }
  }
};

info["result"]
  ? console.log("HOONEEE", info["result"]["contacts"])
  : console.log("WAIT");
return (
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
      {info["result"] &&
        info["result"]["contacts"].map((e) => (
          <tr>
            <AiOutlineUser className="iconn" />
            <td>{e.fullName}</td>
            <td>{e.phoneNb}</td>
            <td>{e.email}</td>
            <td>{e.rlsStatus}</td>
            <td>{[e.lat, "° , ", e.long, "°"]}</td>
            <th
              className="del"
              onClick={(e) => {
                delContact(e.target.parentElement.children[2].innerText);
              }}
            >
              Delete
            </th>
          </tr>
        ))}
    </tbody>
  </table>
);

export default Table;
