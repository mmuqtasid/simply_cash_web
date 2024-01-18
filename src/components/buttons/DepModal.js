import React from 'react'
import Modal from 'react-modal';
import './Modal.css';
import Tab from "./Tab"
function DepModal({ isOpen, onRequestClose, onAddNewDiv }) {


  return (
   <>
   <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Dep Modal"
       
    > 
       
    <div className='fixed-top mt-5 mb-5 '>
      <h3 className='text-center'>Select Departments</h3>
      <div className='search justify-content-center align-item-center'>
      <Tab/>
    
      </div>
      </div>

    </Modal>



   </>
  )
}

export default DepModal;

