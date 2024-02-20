import React from "react";

const StyledSelect = ({ label, value, onChange, options }) => {
  return (
    <div style={inputContainerStyle}>
      <label style={labelStyle}>{label}:</label>
      <div className="select-container">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={selectStyle}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const inputContainerStyle = {
  marginBottom: "20px",
  width: "100%",
  padding: "10px",
  borderRadius: "15px",
  background: "#fefffe",
};

const labelStyle = {
  display: "block",
  margin: "5px",
};

const selectStyle = {
  margin: "5px",
  padding: "10px",
  borderRadius: "1px",
  border: "none",
  borderBottom: "1px solid black", // Adjust the color as needed
  width: "95%",
  outline: "none", // Remove any default outline
};

export default StyledSelect;
