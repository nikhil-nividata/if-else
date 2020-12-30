import React, { Component } from "react";
import "materialize-css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import firebase from "firebase";
import "firebase/auth";
import Navbar from "./components/common/navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      uid: null,
    };
  }

  login = (uid) => {
    this.setState({
      loggedIn: true,
      uid,
    });
  };

  logout = () => {
    this.setState({ loggedIn: false, uid: null });
  };

  componentDidMount() {
    this.authWatch();
  }

  authWatch = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        this.logout();
      } else {
        this.login(user.uid);
      }
    });
  };

  authWatchCancel = () => {};

  componentWillUnmount() {
    this.authWatchCancel();
  }

  render() {
    console.log(this.state);
    const { loggedIn } = this.state;
    return (
      <Router>
        <Navbar loggedIn={loggedIn} />
        <Routes loggedIn={loggedIn} />
      </Router>
    );
  }
}

export default App;
