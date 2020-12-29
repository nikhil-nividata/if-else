import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/homepage";

export default function index(props) {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomePage props={props} />} />
    </Switch>
  );
}
