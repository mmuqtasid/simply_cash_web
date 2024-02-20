import React, { useState } from "react";

const StyledInput = ({ type = "text", label, required, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={inputContainerStyle}>
      <label
        style={{
          ...labelStyle,
          top: isFocused ? "0" : "10px", // Adjusted position based on focus
          fontSize: isFocused ? "0.9em" : "1em", // Adjusted font size based on focus
        }}
      >
        {label}
      </label>
      <div>
        <input
          style={{
            ...inputStyle,
            ...(isFocused && inputFocusedStyle),
          }}
          type={type}
          required={required}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};
const labelStyle = {
  display: "block",
  marginBottom: "5px",
  margin: "5px",
  transition: "all 0.1s ease-out", // Adding a smooth transition for animation
};
const inputContainerStyle = {
  border: "none",
  outline: "none",
  marginBottom: "20px",
  width: "100%",
  padding: "10px",
  borderRadius: "15px",
  background: "#fefffe",
  position: "relative",
};

const inputStyle = {
  margin: "5px",
  padding: "10px",
  width: "90%", // Adjusted width to fill the container
  border: "none",
  outline: "none",
  borderBottom: "1px solid black",
  outline: "none",
};

const inputFocusedStyle = {
  borderBottom: "1px solid blue", // Adjust the color as needed
};

export default StyledInput;
