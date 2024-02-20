import React from 'react'
import './homeMain.css';
import {IoMdCart } from "react-icons/io";
import { PiTagDuotone } from "react-icons/pi";
import { BsEmojiSmile } from "react-icons/bs";
import { RxGear } from "react-icons/rx";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { Link } from 'react-router-dom';
export default function HomeDepartment() {
  return (
    <>
      <div class='container mt-3'>
    <div class='row justify-content-center'>
        
        <div class='col-md-2 custom-col  firstrow'>
        <Link to="/cashier">
       <div className='block'> <IoMdCart className='homeicon'/></div>
          Register
          </Link>
          </div>
          
        <div class='col-md-2 custom-col firstrow'>
        <Link to="/Inventory">
        <div className='block'> <PiTagDuotone className='homeicon'/></div>
            Inventory
            </Link>
            </div>
        <div class='col-md-2 custom-col firstrow'>
            
        <Link to="/cashier">
        <div className='block'> <BsEmojiSmile className='homeicon'/></div>
            Customers
            </Link>
            </div>
    </div>
    <div class='row justify-content-center'>
        <div class='col-md-2 custom-col firstrow'>
        <Link to="/cashier">
        <div className='block'> <PiTagDuotone className='homeicon'/></div>
            Sales
            </Link>
            </div>
        <div class='col-md-2 custom-col firstrow'>
        <Link to="/cashier">
        <div className='block'> <BiSolidBarChartSquare className='homeicon'/></div>
            Reports
            </Link>
            </div>
        <div class='col-md-2 custom-col firstrow'>
        <Link to="/Setting">
        <div className='block'> <RxGear className='homeicon'/></div>
            Settings
            </Link>
            </div>
    </div>
</div>
    
    
    </>
  )
}
