import React from "react";
import {
  CiSettings,
  CiGrid41,
  CiCreditCard1,
  CiShare2,
  CiBullhorn,
  CiMenuBurger,
  CiPower,
} from "react-icons/ci";
import { PiPercentLight } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiBuildings } from "react-icons/pi";
import { BsPrinter } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
function SettingOption({ onOptionClick }) {
  return (
    <>
      <div class="container-fluid">
        {/* GeneralSetting */}
        <div
          onClick={() => onOptionClick("general")}
          className="custom-settings-div"
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <CiSettings size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">General Settings</div>
            <div className="description">System settings, language, sounds</div>
          </div>
        </div>
        {/* Departments */}
        <div
          onClick={() => onOptionClick("department")}
          className="custom-settings-div"
        >
          <div className="left-side">
            <span>
              <CiGrid41 size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Departments</div>
            <div className="description">Manage sales income departments </div>
          </div>
        </div>
        {/* VAT Rates */}
        <div
          onClick={() => onOptionClick("VATRate")}
          className="custom-settings-div"
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <PiPercentLight size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Vat Rates</div>
            <div className="description">Set and edit Vat % rates </div>
          </div>
        </div>
        {/* Payment Types */}
        <div
          onClick={() => onOptionClick("PaymentType")}
          className="custom-settings-div"
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <CiCreditCard1 size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Payment types</div>
            <div className="description">
              Set and edit accepted payment types
            </div>
          </div>
        </div>
        {/* invoice Types */}
        <div
          onClick={() => onOptionClick("InvoiceType")}
          className="custom-settings-div"
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <LiaFileInvoiceDollarSolid size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">invoice types</div>
            <div className="description">Manage invoice types</div>
          </div>
        </div>
        {/* Company Settings */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("CompanySetting")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <PiBuildings size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Company Settings</div>
            <div className="description">
              Company name, registration info , etc.
            </div>
          </div>
        </div>
        {/* Integerations */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("Integeration")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <CiShare2 size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Integerations</div>
            <div className="description">
              Manage Provider, GGPS & Misc credentials
            </div>
          </div>
        </div>
        {/* Printers */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("Printer")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <BsPrinter size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Printers</div>
            <div className="description">Connect and setup your printer</div>
          </div>
        </div>
        {/* Cashiers */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("Cashier")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <LuUsers size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Cashiers</div>
            <div className="description">Manage cashier and limit access</div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="title">
          <h1>Useful information</h1>
        </div>
        <div className="description">
          Learn more about Simply and maximize your business potential.
        </div>
      </div>
      <div className="container-fluid">
        {/* Help Center */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("HelpCenter")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <IoIosInformationCircleOutline size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Help Center</div>
            <div className="description">
              Get help instantly using our Online manual
            </div>
          </div>
        </div>
        {/* Visit Simply website */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("VisitSimply")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <CiBullhorn size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Visit Simply website</div>
            <div className="description">
              Visit our website and access your account
            </div>
          </div>
        </div>
        {/* Terms & Conditions */}
        <div
          className="custom-settings-div"
          onClick={() => onOptionClick("Terms")}
        >
          <div className="left-side">
            <span value={{ color: "blue" }}>
              <CiMenuBurger size={32} color="blue" />
            </span>
          </div>
          <div className="right-side">
            <div className="title">Terms & Conditions</div>
            <div className="description">
              Be familiar with the terms & Conditoins
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="title">
          <h1>Account operations</h1>
        </div>
        <div className="description">Manage your account with simply</div>
      </div>
      <div className="container-fluid">
        {/* Log Out */}
        <div
          className="custom-settings-div-red"
          onClick={() => onOptionClick("Logout")}
        >
          <div className="left-side ">
            <CiPower size={32} color="red" />
          </div>
          <div className="right-side">
          <div className="title-red" onClick={() => alert("Are You Sure to logout")}>  Log out </div>

            <div className="description">Log out from this device </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingOption;
