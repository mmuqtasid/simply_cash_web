import React from 'react';
import './homeMain.css';
import HomeDepartment from './HomeDepartment';

export default function HomeMain() {
  return (
    <>
      <div className='container-fluid custom-container text-center'>
        <div className='header'>
        <div className='logo mt-3' style={{ position: 'relative' }}>
    <img src='./favicon.ico' alt='Logo' />
    <h1 style={{ margin: '0' }}>Simply</h1>
    <span style={{ position: 'absolute', top: '3.5rem', right: '10px', margin: '50' }}>CASH</span>
</div>

         
        </div>
        <h5 className='mt-5'>Welcome __User</h5>
        <p className="switchUser mt-4">Switch User</p>
      
        <HomeDepartment/>
      </div>
    </>
  );
}
