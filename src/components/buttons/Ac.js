import React, { useState } from 'react';
import "./Button.css"
const Ac = () => {
  const [showModal, setShowModal] = useState(false);

  const handleACButtonClick = () => {
    setShowModal(true);
  };

  const handleYesButtonClick = () => {
    // Add logic to clear data or perform other actions
    // For now, let's just close the modal
    setShowModal(false);
  };

  const handleNoButtonClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className='button cancel-button' onClick={handleACButtonClick}>AC</button>

      {showModal && (
        <div className='center'>
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure to clear all?</p>
            <button  onClick={handleYesButtonClick}>Yes</button>
            <button  onClick={handleNoButtonClick}>No</button>
          </div>
        </div>
        </div>
      )}

      {/* Add styles for the modal */}
      <style jsx>{`

        .modal {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }

        .center{
            align-item:center;
            justify-content:center;
        }
     
      `}</style>
    </div>
  );
};

export default Ac;
