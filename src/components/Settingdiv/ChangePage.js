import React from "react";
import GeneralSetting from "./Options/Generalsetting";
import Department from "./Options/Department";
import VatRates from "./Options/VatRates";
import PaymentTypes from "./Options/PaymentTypes";
import InvoiceTypes from "./Options/InvoiceTypes";
import CompanySettings from "./Options/CompanySettings";
import Integeration from "./Options/Integeration";
import Printers from "./Options/Printers";
import Cashiers from "./Options/Cashiers";
import HelpCenter from "./Options/HelpCenter";
import VisitSimply from "./Options/VisitSimply";
import Terms from "./Options/Terms";
import Logout from "./Options/Logout";

function ChangePage({ selectedOption }) {
  return (
    <div>
      {selectedOption === "general" && <GeneralSetting />}
      {selectedOption === "department" && <Department />}
      {selectedOption === "VATRate" && <VatRates />}
      {selectedOption === "PaymentType" && <PaymentTypes />}
      {selectedOption === "InvoiceType" && <InvoiceTypes />}
      {selectedOption === "CompanySetting" && <CompanySettings />}
      {selectedOption === "Integeration" && <Integeration />}
      {selectedOption === "Printer" && <Printers />}
      {selectedOption === "Cashier" && <Cashiers />}
      {selectedOption === "HelpCenter" && <HelpCenter />}
      {selectedOption === "VisitSimply" && <VisitSimply />}
      {selectedOption === "Terms" && <Terms />}
      {selectedOption === "Logout" && <Logout />}

      {(!selectedOption || selectedOption === "default") && <GeneralSetting />}
    </div>
  );
}

export default ChangePage;
