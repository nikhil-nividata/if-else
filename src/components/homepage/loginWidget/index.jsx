import React from "react";
import GoogleSignIn from "../googleSignIn";
import { Card, Row, Col } from "react-materialize";

export default function index() {
  return (
    <div>
      <Row style={{ marginTop: "10vh" }}>
        <Col m={4}></Col>
        <Col m={4}>
          <Card>
            <h5 className="center-align">Login to write a pair of chits</h5>
            <div className="center-align">
              <GoogleSignIn />
            </div>
          </Card>
        </Col>
        <Col m={4}></Col>
      </Row>
    </div>
  );
}
