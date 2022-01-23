import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="Container">
        <div className="login-container">
          <h1>Login to your account</h1>

          <form className="login-form" action="">
            <input type="email" placeholder="Enter email" required />
            <input type="password" placeholder="Enter password" required />
            <button className="login-btn">Submit now</button>
          </form>
          <p className="dont-accout">
            Don't have an account? <a href="#">Singup</a> instead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
