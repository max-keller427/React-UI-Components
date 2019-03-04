import React from "react";
import "./App.css";
// import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ClearButton from "./components/ButtonComponents/ClearButton";
import ZeroButton from "./components/ButtonComponents/ZeroButton";

const calcArray = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const symbArray = ["÷", "x", "-", "+", "="];

const App = () => {
  return (
    <div className="container">
      <div className="clearButton">
        <ClearButton />
      </div>
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
      <div className="zeroButton">
        <ZeroButton />
      </div>
    </div>
  );
};

export default App;
