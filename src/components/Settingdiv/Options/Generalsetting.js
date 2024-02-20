import React, { useState } from "react";
// import CustomInput from "./Sub/CustomInput";
import "./ComponentCss/Generalsetting.css";
import RoundedImage from "../../Misc/RoundedImage";
import StyledSelect from "../../Misc/StyledSelect";
import StyledInput from "../../Misc/StyleInput";
import ToggleSwitch from "../../Misc/ToggleSwitch";
function Generalsetting() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const options = [
    { value: "code1", label: "Code 1" },
    { value: "code2", label: "Code 2" },
    { value: "code3", label: "Code 3" },
  ];
  const options1 = [
    { value: "code4", label: "Code 4" },
    { value: "code5", label: "Code 5" },
    { value: "code6", label: "Code 6" },
  ];
  const options2 = [
    { value: "En", label: "English" },
    { value: "Greek", label: "Greek" },
  ];
  const [isToggled, setToggled] = useState(false);
  const [isToggled1, setToggled1] = useState(false);
  const [isToggled2, setToggled2] = useState(false);
  const [isToggled3, setToggled3] = useState(false);

  const handleToggle = (isChecked) => {
    setToggled(isChecked);
    console.log("Toggle Switch State:", isChecked);
  };
  const handleToggle1 = (isChecked) => {
    setToggled1(isChecked);
    console.log("Toggle Switch State:", isChecked);
  };
  const handleToggle2 = (isChecked) => {
    setToggled2(isChecked);
    console.log("Toggle Switch State:", isChecked);
  };
  const handleToggle3 = (isChecked) => {
    setToggled3(isChecked);
    console.log("Toggle Switch State:", isChecked);
  };

  return (
    <>
      <h2 style={{ margin: 13, marginBottom: 7 }}>General Setting</h2>
      <div className="general">
        <div className="Sleft" style={{ margin: "10px" }}>
          <RoundedImage
            imageUrl={
              "https://previews.123rf.com/images/oliviart/oliviart2004/oliviart200400861/148386278-people-icon-isolated-on-white-background-person-icon-user-vector-icon.jpg"
            }
            altText={"Logo Here"}
          />
          {/* <Button /> */}
          <ToggleSwitch
            onChange={handleToggle}
            checked={isToggled}
            label="Application Sounds"
          />
          <ToggleSwitch
            onChange={handleToggle1}
            checked={isToggled1}
            label="Auto Print"
          />

          <ToggleSwitch
            onChange={handleToggle2}
            checked={isToggled2}
            label="Auto return to register"
          />
          <ToggleSwitch
            onChange={handleToggle3}
            checked={isToggled3}
            label="Double with department key"
          />
        </div>
        <div className="Sright">
          <StyledSelect
            label="Default registers invoice type"
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            width={"100%"}
          />
          <StyledSelect
            label="Default register customer"
            value={selectedOption1}
            onChange={setSelectedOption1}
            options={options1}
          />
          <StyledSelect
            label="App Language"
            value={selectedOption2}
            onChange={setSelectedOption2}
            options={options2}
          />
          <StyledInput
            label="Maximum total sale amount"
            type="number"
            required="true"
            placeholder="Enter Number Here"
          />
          <StyledInput
            label="Receipt Thanks message"
            type="text"
            required="true"
            placeholder="Enter Text here"
          />
          <StyledInput
            label="DBA Name"
            type="text"
            required="true"
            placeholder="Enter Text here"
          />
        </div>
      </div>
    </>
  );
}

export default Generalsetting;
