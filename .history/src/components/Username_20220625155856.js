import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";

const Username = ({ setUsername, username }) => {
  return (
    <div className="user">
      <h1 className="icon">
        <AiOutlineUser />
      </h1>
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
          console.log(username);
        }}
      />
    </div>
  );
};

export default Username;
