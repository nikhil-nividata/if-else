import React from "react";
import LoginWidget from "./loginWidget";

export default function index({ loggedIn }) {
  return <div>{!loggedIn ? <LoginWidget /> : null}</div>;
}
