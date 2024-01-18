import React from 'react'
import "./Button.css"
import OutPut from './OutPut'
import { FaUser ,FaGift} from "react-icons/fa";
import { useState } from 'react';
import UserModal from './UserModal';
import DepModal from './DepModal';
import Ac from './Ac';
import AddDiv from '../comm/AddDiv';


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
     <div class="left-div">
       <OutPut value={display}/>
        <div class="small-div">
            πελατης λιανικης
        </div>
        <div class="calculator">
            <button id="cancel-button" onClick={() =>handleButtonClick('cancel')}> <span>⌫</span></button>
            <button id="gary" onClick={() => handleButtonClick('X')}>X</button>
            <button id="gary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
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
        <button id="cancel-button"  onClick={() => handleButtonClick('AC')}>AC</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        </div>
    </div>
    <div class="right-div">
        <div class="button-container">
        <button className="button user-icon" onClick={() => handleButtonClick('user')}>
            <FaUser className="icon" />
          </button>
          <UserModal isOpen={isUserModalOpen} onRequestClose={closeUserModal} />

            <button className="button notes-icon" onClick={() => (window.alert("Add Notes"))}>Notes</button>
            <button className="button gift-icon" onClick={() => (window.alert("Create Gif"))}><FaGift className='icon' /></button>
            <button className="button cancel-button " ><Ac/></button>
            {/* Department Modal  */}
            <button className="button blue" onClick={() => handleButtonClick('dep')}>
            DX <DepModal isOpen={isDepModalOpen} onRequestClose={closeDepModal} />
          </button>
            <button className="button blue">Cat Label1</button>
            <button className="button blue">Cat Label</button>
            <button className="button blue">Nothing</button>
            <button className="button1">PAY</button>
            <button className="button1">CASH</button>
        </div>
    </div>
    </>
  )
}



