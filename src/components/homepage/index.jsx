import React from "react";
import { Button } from "react-materialize";
import GoogleSignIn from "../googleSignIn";
import firebase from "firebase";
import "firebase/auth";

export default function index(props) {
  console.log("HomePage props ", props);
  return (
    <div>
      <GoogleSignIn {...props}></GoogleSignIn>
    </div>
  );
}
