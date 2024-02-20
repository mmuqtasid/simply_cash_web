import React, { useState } from "react";
import StyledSelect from "../../Misc/StyledSelect";
import "./ComponentCss/Printers.css";

function Printers() {
  const options = [
    { value: "bluetooth", label: "Bluetooth" },
    { value: "tcp", label: "TCP/IP" },
    { value: "SumniPrinter", label: "Sunmi Printer" },
    { value: "SmartPrinter", label: "MyPOS Smart Printer" },
    { value: "NBGPay", label: "NBGPay Printer" },
  ];
  const options1 = [
    { value: "58mm", label: "58mm" },
    { value: "80mm", label: "80mm" },
    { value: "118mm", label: "118mm" },
  ];
  const options2 = [
    { value: "737/14", label: "737/14" },
    { value: "737/42", label: "737/42" },
    { value: "737/64", label: "737/64" },
    { value: "737/24", label: "737/24" },
    { value: "737/1", label: "737/1" },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  return (
    <>
      <h3 className="title"> Printers</h3>
      <div className="general">
        <div className="Sleft">
          <StyledSelect
            label="Select Type"
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            width={"100%"}
          />
          <button style={buttonStyle1} type="">
            Search
          </button>
          <StyledSelect
            label="Codepage"
            value={selectedOption2}
            onChange={setSelectedOption2}
            options={options2}
          />
        </div>
        <div className="Sright">
          <StyledSelect
            label="Page Size"
            value={selectedOption1}
            onChange={setSelectedOption1}
            options={options1}
          />
          <button style={buttonStyle1} type="">
            Test Print
          </button>
        </div>
      </div>
      <button style={buttonStyle} type="">
        Save
      </button>
    </>
  );
}
const buttonStyle = {
  backgroundColor: "#3498db", // Blue color
  margin: "20px",
  width: "80%",
  color: "#fff", // White text
  padding: "10px 20px", // Padding around text
  fontSize: "16px", // Font size
  borderRadius: "5px", // Rounded corners
  border: "none", // No border
  cursor: "pointer", // Pointer cursor on hover
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Slight box shadow
};
const buttonStyle1 = {
  backgroundColor: "grey",
  margin: "20px 0 20px auto", // Added "auto" to margin-left
  color: "#fff",
  width: "35%",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default Printers;
