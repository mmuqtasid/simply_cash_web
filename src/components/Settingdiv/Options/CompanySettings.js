import React, { useState } from "react";
import "./ComponentCss/CompanySetting.css";
import StyledInput from "../../Misc/StyleInput";
import StyledSelect from "../../Misc/StyledSelect";

function CompanySettings() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isToggled, setToggled] = useState(false);
  const handleToggle = (isChecked) => {
    setToggled(isChecked);
    console.log("Toggle Switch State:", isChecked);
  };
  const options = [
    { value: "Greek", label: "Greek" },
    { value: "England", label: "England" },
  ];
  return (
    <div>
      <h3 className="title">Company Settings</h3>
      <div className="general">
        <div className="Sleft">
          <StyledInput
            label="Company name"
            type="text"
            required="true"
            placeholder="Enter Text here"
          />

          <StyledInput
            label="VAT Number"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />

          <StyledInput
            label="Company registration number"
            type="number"
            required="true"
            placeholder="Enter Number Here"
          />

          <StyledInput
            label="City"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />

          <StyledSelect
            label="Default registers invoice type"
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div className="Sright">
          <StyledInput
            label="Activity"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />
          <StyledInput
            label="Tax authority"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />
          <StyledInput
            label="Address"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />
          <StyledInput
            label="Zip Code"
            type="Number"
            required="true"
            placeholder="Enter Number Here"
          />
        </div>
      </div>
      <h3 className="title">Branch Information</h3>
      <div className="general">
        <div className="Sleft">
          <StyledInput
            label="Address"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />
          <StyledInput
            label="Zip Code"
            type="Number"
            required="true"
            placeholder="Enter Text Here"
          />
        </div>
        <div className="Sright">
          <StyledInput
            label="City"
            type="text"
            required="true"
            placeholder="Enter Text Here"
          />
          <StyledSelect
            label="Default registers invoice type"
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      </div>
      <h3 className="title">My DATA</h3>
      <div className="branch">
        <StyledInput
          label="Branch ID"
          type="Number"
          required="true"
          placeholder="Enter Number Here"
        />
      </div>
    </div>
  );
}

export default CompanySettings;
