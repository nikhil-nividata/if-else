import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/homepage";

export default function index(props) {
  console.log("Router props", props);
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage {...props} />} />
    </Switch>
  );
}
