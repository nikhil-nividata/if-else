import React from "react";
import { Button } from "react-materialize";
import firebase from "firebase";
import "firebase/auth";

export default function index(props) {
  const provider = new firebase.auth.GoogleAuthProvider();
  return (
    <div>
      <Button
        onClick={() => {
          firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {})
            .catch((error) => {
              console.log("Error ", error);
            });
        }}
      >
        Login in with Google
      </Button>
    </div>
  );
}
