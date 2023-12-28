import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [apodixiContent, setApodixiContent] = useState('Demo Demo Demo');
  const [dynamicDivCounter, setDynamicDivCounter] = useState(0);
  const handleDXButtonClick = () => {
    // Replace content with four div elements
    setApodixiContent(
      <>

      
      </>
    );
  };

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
     
     
    </>
  );
}
