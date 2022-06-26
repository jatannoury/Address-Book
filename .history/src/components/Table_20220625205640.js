import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios"
import jwt_decode from "jwt-decode";
useEffect(() => {
  //Runs only on the first render
}, []);
const Table = () => {
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
