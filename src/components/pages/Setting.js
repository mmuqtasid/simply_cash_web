// Setting.js
import React, { useState } from "react";
import "./Setting.css";
import SettingOption from "../Settingdiv/SettingOption";
import ChangePage from "../Settingdiv/ChangePage";

function Setting() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="split">
        <div className="left">
          <SettingOption onOptionClick={handleOptionClick} />
        </div>
        <div className="right">
          <ChangePage selectedOption={selectedOption} />
        </div>
      </div>
    </>
  );
}

export default Setting;
