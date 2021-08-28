import React from "react";
import classes from "./SignUp.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = (props) => {
  const signInHandler = () => {
    /*  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }); */
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>SIGN IN</h2>
        <form>
          <input type="text" required={true} placeholder="Name"></input>
          <input type="email" required={true} placeholder="Email"></input>
          <input type="password" required={true} placeholder="Password"></input>
          <button>Create Account</button>
        </form>
        <div className={classes["signup-forgot"]}>
          <h5 onClick={props.onLoginClick}>Login</h5>
          <h5>Forgot Password</h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
