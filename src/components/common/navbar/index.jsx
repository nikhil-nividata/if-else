import React from "react";
import { Navbar, NavItem } from "react-materialize";
import firebase from "firebase";
import "firebase/auth";

export default function index({ loggedIn }) {
  return (
    <Navbar
      alignLinks="right"
      centerLogo
      brand={<a href="#">If Else</a>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      {loggedIn ? (
        <NavItem
          onClick={() => {
            firebase.auth().signOut().then().catch();
          }}
        >
          <span style={{ fontSize: "1.6rem", marginRight: "2vw" }}>
            {" "}
            Logout{" "}
          </span>
        </NavItem>
      ) : null}
    </Navbar>
  );
}
