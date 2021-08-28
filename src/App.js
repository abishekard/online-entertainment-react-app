import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import LoginSignUp from "./loginAndSignUp/LoginSignUp";
import LoginContexProvider from "./store/LoginContextProvider";

function App() {
  return (
    <LoginContexProvider>
      <Router>
        <Switch>
          <Route path="/login_signin">
            <LoginSignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <h2>root</h2>
            <Router path="child">
              <h2>child</h2>
            </Router>
          </Route>
        </Switch>
      </Router>
    </LoginContexProvider>
  );
}

export default App;
