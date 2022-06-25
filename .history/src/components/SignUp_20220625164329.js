import React from "react";
import { useState, useEffect } from "react";
import Username from "./Username";
import Password from "./Password";
import Email from "./Email";
const SignUp = () => {
  //Defining Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //input:none
  //output:none
  //functionality:send Post request at submit click
  async function login() {
    const res = await fetch(`http://localhost:3001/api/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: username,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data["user"]) {
      localStorage.setItem("access_token", data["user"]);
      console.log("HEY");
      window.location.href = "/";
    } else {
      alert("Email already in use");
    }
    return data;
  }
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form>
          <Email setEmail={setEmail} email={email} />
          <Username setUsername={setUsername} username={username} />
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
          <div className="signupLink"></div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
