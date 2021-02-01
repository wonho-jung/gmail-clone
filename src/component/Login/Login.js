import React from "react";
import "./Login.css";
import logo from "./../../assets/login-logo.png";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
