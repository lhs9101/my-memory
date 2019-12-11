import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Main from "./Main";
export default function({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/sign-in"></Redirect>
        </Route>
        <Route path="/sign-in" component={Login} exact></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/main" component={Main}></Route>
      </Switch>
    </Router>
  );
}
