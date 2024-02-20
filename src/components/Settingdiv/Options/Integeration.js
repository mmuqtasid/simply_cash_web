import React from "react";
import "./ComponentCss/integeration.css";
import StyledInput from "../../Misc/StyleInput";
import MinimalisticAlert from "../../Misc/MinimalisticAlert";
function Integeration() {
  return (
    <>
      <div className="general">
        <div className="Sleft">
          <h3>GGPS Gateway lookup credentials</h3>
          <StyledInput
            label="Username"
            required="true"
            type="text"
            placeholder="Enter Text here"
          />
          <StyledInput
            label="Password"
            required="true"
            type="password"
            placeholder="Enter Text here"
          />
          <button style={buttonStyle} type="">
            Test Connection
          </button>
        </div>
        <div className="Sright">
          <h3>SMS Settings</h3>
          <StyledInput
            label="SMS Gateway API Key"
            required="true"
            type="text"
            placeholder="Enter Text here"
          />
          <StyledInput
            label="SMS Sender ID"
            required="true"
            type="text"
            placeholder="Enter Text here"
          />
          <StyledInput
            label="SMS Body"
            required="true"
            type="text"
            placeholder="Enter Text here"
          />

          <MinimalisticAlert
            label="Credits!"
            description="230,000 credits remaining"
          />
        </div>
      </div>
    </>
  );
}
const buttonStyle = {
  backgroundColor: "#3498db", // Blue color
  color: "#fff", // White text
  padding: "10px 20px", // Padding around text
  fontSize: "16px", // Font size
  borderRadius: "5px", // Rounded corners
  border: "none", // No border
  cursor: "pointer", // Pointer cursor on hover
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Slight box shadow
};
export default Integeration;
