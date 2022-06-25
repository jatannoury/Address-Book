import React, { useState, useEffect } from "react";
import "../App.css";
import Email from "./Email";
import Password from "./Password";

import { Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
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
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form onSubmit={console.log(email)}>
          <Email setEmail={setEmail} email={email} />
          <Password setPassword={setPassword} password={password} />
          <input
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
            type="submit"
            className="submit"
            value="Login"
          />
          <br />
          <div className="signupLink">
            <a href="/register">Dont't have an account?Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
