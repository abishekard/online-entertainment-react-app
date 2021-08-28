import React, { useContext, useState } from "react";
import LoginContext from "../store/LoginContex";
import classes from "./Login.module.css";
import FirebaseConfig from "../config/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useHistory } from "react-router-dom";

import { initializeApp } from "firebase/app";

const Login = (props) => {
  const FireConfig = initializeApp(FirebaseConfig);
  const db = getDatabase();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginContext = useContext(LoginContext);
  const loginHandler = (event) => {
    event.preventDefault();

    console.log(email + "  " + password);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        console.log(user.uid);
        console.log(user.accessToken);

        const starCountRef = ref(db, "users/" + user.uid);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          loginContext.name = data.userName;
          loginContext.email = data.email;
          loginContext.mobile = data.mob;
          loginContext.profileImage = data.image;
          loginContext.userId = user.uid;
          loginContext.date = data.date;
          loginContext.setLogin(true);

          history.push("/home");

          console.log(data);
          console.log(data.email);
          console.log(data.mob);
          console.log(data.image);
          console.log(data.date);
          console.log(loginContext.name);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //  console.log(errorMessage + " -- " + errorCode);
        if (errorCode == "auth/wrong-password") alert("wrong password");
        if (errorCode == "auth/user-not-found") alert("Account does not exist");
      });
  };

  const emailChangeListener = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeListener = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>LOGIN</h2>
        <form onSubmit={loginHandler}>
          <input
            onChange={emailChangeListener}
            type="email"
            required={true}
            placeholder="Email"
          ></input>
          <input
            onChange={passwordChangeListener}
            type="password"
            required={true}
            placeholder="Password"
          ></input>
          <button>Login</button>
        </form>
        <div className={classes["signup-forgot"]}>
          <h5 onClick={props.onSignInClick}>Create Account</h5>
          <h5>Forgot Password</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
