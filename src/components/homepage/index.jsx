import React from "react";
import LoginWidget from "./loginWidget";
import InputField from "./inputFeild";

export default function index({ loggedIn }) {
  return <div>{!loggedIn ? <LoginWidget /> : <InputField />}</div>;
}
