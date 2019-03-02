import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="container">
      <div className="numberButton">
        <NumberButton />
      </div>
    </div>
  );
};

export default App;
