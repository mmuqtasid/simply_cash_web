import React, { useState, useEffect } from "react";

const MinimalisticAlert = ({ description, label, onClose }) => {
  const [showCredit, setShowCredit] = useState(false);

  const handleButtonClick = () => {
    setShowCredit(true);
  };

  useEffect(() => {
    let timeoutId;

    const handleDocumentClick = (e) => {
      if (showCredit && !e.target.closest("#alertBox")) {
        setShowCredit(false);
        onClose && onClose(); // Optional callback for additional actions on close
      }
    };

    timeoutId = setTimeout(() => {
      document.addEventListener("click", handleDocumentClick);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showCredit, onClose]);

  return (
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>
        {label}
      </button>
      {showCredit && (
        <div style={alertStyle} id="alertBox">
          <p>{description}</p>
          <button
            style={buttonStyle}
            onClick={() => {
              setShowCredit(false);
              onClose && onClose(); // Optional callback for additional actions on close
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const alertStyle = {
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "10px",
  border: "1px solid #ccc",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "250px",
  height: "150px",
  textAlign: "center",
};

export default MinimalisticAlert;
