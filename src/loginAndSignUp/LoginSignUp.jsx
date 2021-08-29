import { useState } from "react";

import Header from "../ui/Header";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginSignUp() {
  const [loginClick, setLoginClick] = useState(true);
  const [forgotPass, setForgotPass] = useState(false);

  const signInClickHandler = () => {
    setLoginClick(false);
  };
  const forgotPassClickHandler = () => {};
  const loginClickHandler = () => {
    setLoginClick(true);
  };

  return (
    <div className="App">
      <Header>
        <h2 style={{ marginTop: "8px", color: "white" }}>
          Online Entertainment
        </h2>
      </Header>

      {!loginClick && (
        <SignUp
          onLoginClick={loginClickHandler}
          onForgotPassClick={forgotPassClickHandler}
        />
      )}
      {loginClick && (
        <Login
          onSignInClick={signInClickHandler}
          onForgotPassClick={forgotPassClickHandler}
        />
      )}
    </div>
  );
}

export default LoginSignUp;
