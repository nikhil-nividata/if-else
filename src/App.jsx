import React, { Component } from "react";
import "materialize-css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
