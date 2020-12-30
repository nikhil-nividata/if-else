import React, { Component } from "react";
import { Row, Col, Button, Card, Textarea } from "react-materialize";
import firebase from "firebase";
import "firebase/functions";
import "firebase/auth";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canPost: false,
      ifOne: "",
      ifTwo: "",
      elseOne: "",
      elseTwo: "",
    };
  }

  async componentDidMount() {
    const user = await firebase
      .firestore()
      .collection("chitUsers")
      .doc(firebase.auth().currentUser.uid)
      .get();
    console.log("User is ", user.data());
    if (user.data().remainingIfs === 2 && user.data().remainingElse === 2) {
      this.setState({ canPost: true });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = async () => {
    const functions = firebase.functions();
    const addIfElse = functions.httpsCallable("addIfElse");
    try {
      const response = await addIfElse({ ...this.state });
      this.setState({
        ifOne: "",
        ifTwo: "",
        elseOne: "",
        elseTwo: "",
      });
    } catch (error) {
      console.log(error);
    }
    const user = await firebase
      .firestore()
      .collection("chitUsers")
      .doc(firebase.auth().currentUser.uid)
      .get();
    console.log("User is ", user.data());
    if (user.data().remainingIfs === 2 && user.data().remainingElse === 2) {
      this.setState({ canPost: true });
    } else {
      this.setState({ canPost: false });
    }
  };

  render() {
    const { ifOne, ifTwo, elseOne, elseTwo, canPost } = this.state;
    return (
      <div className="container">
        <Card style={{ marginTop: "50px" }}>
          {canPost ? (
            <>
              <Row>
                <Col m={6}>
                  <h6 className="center-align">If-Else 1</h6>
                  <Textarea
                    l={12}
                    placeholder="If One"
                    name="ifOne"
                    value={ifOne}
                    onChange={this.handleChange}
                  />
                  <Textarea
                    l={12}
                    placeholder="Else One"
                    name="elseOne"
                    value={elseOne}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col m={6}>
                  <h6 className="center-align">If-Else 2</h6>
                  <Textarea
                    l={12}
                    placeholder="If Two"
                    name="ifTwo"
                    value={ifTwo}
                    onChange={this.handleChange}
                  />
                  <Textarea
                    l={12}
                    placeholder="Else Two"
                    name="elseTwo"
                    value={elseTwo}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <div className="center-align">
                <Button onClick={this.submit}>Save</Button>
              </div>
            </>
          ) : (
            <h3>You have posted 2 chits, wait for the game later </h3>
          )}
        </Card>
      </div>
    );
  }
}

export default InputField;
