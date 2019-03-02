import React from "react";
import "./Button.css";
const symbArray = ["x", "-", "+", "="];

function ActionButton() {
  return (
    <div className="actionButton">
      <button className={props.buttonStyle}>{props.calcArray}</button>
      <button className={props.buttonStyle}>{props.calcArray}</button>
    </div>
  );
}

export default ActionButton;
