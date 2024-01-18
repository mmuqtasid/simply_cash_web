import React from 'react'

import '../buttons/Modal.css';

function TabitemsMisc({ onRequestClose, onAddNewDiv }) {
  
  

  return (
   <>
 
      
    <div className='fixed-top  mb-5 '>
    
      <div className='search justify-content-center align-item-center'>
   
      </div>
      </div>
<div className='space'></div>
      <div className='row justify-content-center align-item-center mt-5 mr-5'>
      <div className="new-content" onClick={() => onAddNewDiv()}>
          <p>Div Button</p>
        </div>
        <div className="new-content1">Cat Label</div>
        <div className="new-content">Nothing</div>
        <div className="new-content1">P24</div>
          <div className="new-content" onClick={() => (alert("Sure to Cancel-2"))}><p>Cat Label2</p></div>
        <div className="new-content1">Cat Label</div>
        <div className="new-content">Nothing</div>
        <div className="new-content1">P24</div><br/>
        <div className='row  justify-content-center align-item-center '>
          
        <div className="new-content1" id='close' >Close</div>
        
       
        </div>



    <div className='row'> 
    <div className='col-md-12 col-lg-12 mt-3'>     
     <button className='btn btn-danger col-md-4 col-lg-4 ' onClick={onRequestClose}>Cleaning</button>
      <button className='btn btn-success col-md-4 col-lg-4 ' onClick={onRequestClose}>Selection</button>
      </div>
      </div>
      </div>
   </>
  )
}

export default TabitemsMisc;

