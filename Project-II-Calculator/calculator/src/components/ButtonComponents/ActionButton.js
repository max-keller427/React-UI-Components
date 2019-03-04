import React from "react";
import "./Button.css";

function ActionButton(props) {
  return <button className="actionButton">{props.symbol}</button>;
}

export default ActionButton;
