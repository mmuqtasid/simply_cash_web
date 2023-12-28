import React from 'react'
import Modal from 'react-modal';
import './Modal.css';
function DepModal({ isOpen, onRequestClose }) {
  return (
   <>
   <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Dep Modal"
       
    > 
      
    <div className='fixed-top mt-5 mb-5 '>
      <h3 className='text-center'>Select Departments</h3>
      <div className='search justify-content-center align-item-center w-75 position-relative '>
      <div className="position-relative w-75">
        <input
          type='text'
          placeholder='Search'
          className='form-control rounded p-1 text-center pl-4 ml-5'
          style={{ paddingRight: '30px', marginLeft:'4rem' ,  }}
        />
        <i
          className="fas fa-search position-absolute"
          style={{ top: '50%', transform: 'translateY(-50%)', left: '10px', color: '#aaa' }}
        ></i>
      </div>
   
      </div>
      </div>

      <div className='row mt-4 justify-content-center align-item-center mt-5 mr-5'>
        <div className="new-content" onClick={() => (alert("Add Div"))}><p>Add Div Button</p></div>
        <div className="new-content1">Cat Label</div>
        <div className="new-content">Nothing</div>
        <div className="new-content1">P24</div>
          <div className="new-content" onClick={() => (alert("Sure to Cancel-2"))}><p>Cat Label2</p></div>
        <div className="new-content1">Cat Label</div>
        <div className="new-content">Nothing</div>
        <div className="new-content1">P24</div></div><br/>
        <div className='row  justify-content-center align-item-center '>
          <div className="new-content" onClick={() => (alert("Sure to Cancel-3"))}><p>Cat Label3</p></div>
        <div className="new-content1">Cat Label</div>
        <div className="new-content">Nothing</div>
        <div className="new-content1">P24</div>
          <div className="new-content" onClick={() => (alert("Sure to Cancel-4"))}><p>Cat Label4</p></div>
        <div className="new-content1">Cat Label</div>
        <div className="new-content">Nothing</div>
        <div className="new-content1" id='close' >Close</div>
        
       
        </div>



    <div className='row'> 
    <div className='col-md-12 col-lg-12 mt-5'>     
     <button className='btn btn-danger col-md-4 col-lg-4 ' onClick={onRequestClose}>Cleaning</button>
      <button className='btn btn-success col-md-4 col-lg-4 ' onClick={onRequestClose}>Selection</button>
      </div>
      </div>

    </Modal>



   </>
  )
}

export default DepModal;

