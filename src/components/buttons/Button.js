import React, { useState } from 'react';
import "./Button.css";
import OutPut from './OutPut';
import { FaUser, FaGift } from "react-icons/fa";
import UserModal from './UserModal';
import DepModal from './DepModal';
import NotesModal from './NotesModal'; // Import NotesModal component
import Ac from './Ac';

export default function Button() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isGifModalOpen, setIsGifModalOpen] = useState(false);
  const [isDepModalOpen, setIsDepModalOpen] = useState(false);

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
      setExpression('');
    } else if (value === '=') {
      try {
        const result = eval(expression);
        setDisplay(result);
        setExpression(result);
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'cancel') {
      if (display !== '0') {
        const newDisplay = display.slice(0, -1);
        const newExpression = expression.slice(0, -1);
        setDisplay(newDisplay === '' ? '0' : newDisplay);
        setExpression(newExpression === '' ? '0' : newExpression);
      }
    } else {
      if (display === '0') {
        setDisplay(value);
        setExpression(value);
      } else {
        setDisplay(display + value);
        setExpression(expression + value);
      }
    }

    // Open the corresponding modal when the respective button is clicked
    if (value === 'user') {
      setIsUserModalOpen(true);
    } else if (value === 'notes') {
      setIsNotesModalOpen(true);
    } else if (value === 'gif') {
      setIsGifModalOpen(true);
    } else if (value === 'dep') {
      setIsDepModalOpen(true);
    } else if (value === 'catLabel22') {
      if (typeof window !== 'undefined' && window.parent) {
        window.parent.postMessage('addNewDiv', '*');
      }
    }
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
  };

  const closeNotesModal = () => {
    setIsNotesModalOpen(false);
  };

  const closeGifModal = () => {
    setIsGifModalOpen(false);
  };

  const closeDepModal = () => {
    setIsDepModalOpen(false);
  };

  return (
    <>
      <div className="left-div">
        <OutPut value={display} />
        <div className="small-div">
          πελατης λιανικης
        </div>
        <div className="calculator">
          <button id="cancel-button" onClick={() => handleButtonClick('cancel')}>
            <span>⌫</span>
          </button>
          <button id="gary" onClick={() => handleButtonClick('X')}>X</button>
          <button id="gary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg></button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button id="cancel-button" onClick={() => handleButtonClick('AC')}>AC</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
        </div>
      </div>
      <div className="right-div">
        <div className="button-container">
          <button className="button user-icon" onClick={() => handleButtonClick('user')}>
            <FaUser className="icon" />
          </button>
          <UserModal isOpen={isUserModalOpen} onRequestClose={closeUserModal} />
          <button className="button notes-icon" onClick={() => handleButtonClick('notes')}> {/* Update onClick event handler */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
          </button>
          {/* Render NotesModal conditionally */}
          {isNotesModalOpen && <NotesModal isOpen={isNotesModalOpen} onRequestClose={closeNotesModal} />}
          <button className="button gift-icon" onClick={() => handleButtonClick('gif')}><FaGift className='icon' /></button>
          <button className="button cancel-button">
            <Ac />
          </button>
          <button className="button blue" onClick={() => handleButtonClick('dep')}>
            DX <DepModal isOpen={isDepModalOpen} onRequestClose={closeDepModal} />
          </button>
          <button className="button blue" onClick={() => handleButtonClick('catLabel22')}>Cat Label22</button>
          <button className="button blue">Cat Label</button>
          <button className="button blue">Nothing</button>
          <button className="button1">PAY</button>
          <button className="button1">CASH</button>
        </div>
      </div>
    </>
  )
}
