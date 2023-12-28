import React from "react";
import "./OutPut.css";

const OutPut = ({ value }) => {
  return (
    <div className="calculatorOutput">
      <div className="output-box">
        <input type="text" value={value} readOnly />
      </div>
    </div>
  );
};

export default OutPut;
