import React from "react";
import "./App.css";
// import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const calcArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbArray = ["÷", "x", "-", "+", "="];

const App = () => {
  return (
    <div className="container">
      <div className="numberButton">
        {calcArray.map((num, index) => (
          <NumberButton num={num} key={index} />
        ))}
      </div>
      <div className="actionButtons">
        {symbArray.map((symbol, index) => (
          <ActionButton symbol={symbol} key={index} />
        ))}
      </div>
      <div className="calcDisplay">
        <CalculatorDisplay />
      </div>
    </div>
  );
};

export default App;
