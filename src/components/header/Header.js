import React, { useState, useEffect } from 'react';
import './Header.css';
import DepModal from '../buttons/DepModal';

export default function Header() {
  const [apodixiContent, setApodixiContent] = useState('Demo Demo Demo');
  const [dynamicDivCounter, setDynamicDivCounter] = useState(0);

  const addNewDiv = () => {
    const newDiv = (
      <div key={dynamicDivCounter} className="new-dynamic-div">
        <div className='new-content1'>Dynamic Div #{dynamicDivCounter}</div>
      </div>
    );
    setApodixiContent((prevContent) => (
      <>
        {prevContent}
        {newDiv}
      </>
    ));

    setDynamicDivCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'addNewDiv') {
        addNewDiv();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <div className="header-tab">
        <div className="content">#</div>
        <div className="des">Description</div>
        <div className="price">Price</div>
        <div className="X">X</div>
        <div className="tax">Tax</div>
        <div className="total">Total</div>
      </div>
      <div className="header-tab1">
        <div className="last"><h5 className='heading'>0.00$</h5></div>
      </div>
      <div className="apodixi">{apodixiContent}</div>
      <DepModal />
    </>
  );
}
