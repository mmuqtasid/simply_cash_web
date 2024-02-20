import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, onChange, checked }) => {
  const [isChecked, setChecked] = useState(checked || false);

  const handleToggle = () => {
    setChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="toggle-switch-container">
      <label className="toggle-label">
        {label}
        <span className="toggle-switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="toggle-input"
          />
          <span className="slider round"></span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
