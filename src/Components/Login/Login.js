import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import "./Login.css";
const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const hanldeGooleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert("Login Successfully.");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

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

          <div className="other-login-sytem">
            <button onClick={hanldeGooleSingIn} className="google-tbn">
              Google
            </button>
            {/* <button className="fb-tbn">facebook</button>
            <button className="git-tbn">Github</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
