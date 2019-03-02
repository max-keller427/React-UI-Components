import React from "react";
import "./Button.css";

const calcArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function NumberButton(props) {
  return (
    <div className="numberButton">
      <button className={props.buttonStyle}>{props.calcArray}</button>
    </div>
  );
}

export default NumberButton;
