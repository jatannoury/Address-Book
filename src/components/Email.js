import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const Email = ({ setEmail, email }) => {
  return (
    <div className="pass">
      <h1 className="icon">
        <AiOutlineMail />
      </h1>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      />
    </div>
  );
};

export default Email;
