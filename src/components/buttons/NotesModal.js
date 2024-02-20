import React from 'react';
import Modal from 'react-modal';

const NotesModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Notes Modal"
      style={{
        content: {
          width: '90%',
          height: '90%',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '20px'
        }
      }}
    >
      <div className="container">
        <h3 className="text-center mb-4">Add Notes</h3>
        <div className="form-group">
          <label htmlFor="noteContent">Note Content</label>
          <textarea
            className="form-control"
            id="noteContent"
            rows="5"
            placeholder="Enter your note here..."
          ></textarea>
        </div>
      
        <div className='row'> 
    <div className='col-md-12 col-lg-12 mt-5'>     
     <button className='btn btn-danger col-md-1 col-lg-1 ' onClick={onRequestClose}>Close</button>
      <button className='btn btn-success col-md-1 col-lg-1 ' onClick={onRequestClose}>Save</button>
      </div>
      </div>
      </div>
    </Modal>
  );
};

export default NotesModal;
