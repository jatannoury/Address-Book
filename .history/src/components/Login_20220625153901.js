import React, { useState, useEffect } from "react";
import "../App.css";
import Username from "./Username";
import Password from "./Password";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/admin/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    console.log(data);
    if (data["access_token"]) {
      localStorage.setItem("access_token", data["access_token"]);
      console.log("HEY");
      window.location.href = "/Admin_page";
    } else {
      alert("Wrong username or password");
    }
    return data;
  }
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form onSubmit={console.log(email)}>
          <Username setEmail={setEmail} email={email} />
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
          <a href="/register" class>Dont't have an account?Register</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
