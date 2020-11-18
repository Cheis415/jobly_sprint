import React from "react";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";

import HomePage from "./HomePage";
import { Switch, Route, Redirect } from "react-router-dom";


function Routes() {
  return (
    <div className="App">
      <Companies />
      <Company />
      <Jobs />
      <SignUp />
      <Login />
      <Profile />
      <Nav />
      <HomePage />
    
    </div>
  );
}

export default Routes;