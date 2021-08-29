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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </LoginContexProvider>
  );
}

export default App;
