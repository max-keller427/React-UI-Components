import React from "react";
import "./Button.css";

function NumberButton(props) {
  console.log(props);
  return <button className="numButton">{props.num}</button>;
}

export default NumberButton;
