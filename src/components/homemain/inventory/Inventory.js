import React from 'react';
import { ImCross } from "react-icons/im";
import './inventory.css';

export default function Inventory() {
  return (
    <div className='container-fluid ' id='custom-container'>
      <h4 className="text-center mt-4">Product List</h4>
      <div className='search-bar'>
        <input type="text" placeholder="Search..." />
        <ImCross className="search-icon" />
      </div>
      <div className="horizontal-scrollable-menu">
        <div className="menu-item">Item 1</div>
        <div className="menu-item">Item 2</div>
        <div className="menu-item">Item 3</div>
        <div className="menu-item">Item 4</div>
        <div className="menu-item">Item 5</div>
        <div className="menu-item">Item 6</div>
        <div className="menu-item">Item 7</div>
        
      </div>
    </div>
  );
}
