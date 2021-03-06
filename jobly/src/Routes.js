import React, {useContext} from "react";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import UserContext from "./UserContext";

import HomePage from "./HomePage";
import { Switch, Route, Redirect } from "react-router-dom";



function Routes() {
  const obj = useContext(UserContext);
  return (
    <div className="pt-5">
      <Switch>
        
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
        {obj.currUser ? <Redirect to="/" /> : <SignUp />}
        </Route>

        <Route exact path="/companies">
          <Companies />
        </Route>

        <Route exact path="/jobs">
          <Jobs />
        </Route>

        <Route exact path="/companies/:handle">
          <Company />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Redirect to="/" />

      </Switch>
    </div>
);
}

export default Routes;