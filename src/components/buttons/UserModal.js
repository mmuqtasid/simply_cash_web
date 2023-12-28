// UserModal.js
import React from 'react';
import Modal from 'react-modal';
import {FaSearch ,FaPodcast} from "react-icons/fa";

const UserModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Modal"
      style={{ width: '50%', height:'4rem' ,  }}
    >

      
    <div className='fixed-top mt-5 mb-5 '>
      <h3 className='text-center'>Customer Choice</h3>
      <div className='search justify-content-center align-item-center w-75 position-relative'>
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
      <p className='float-right position-absolute  col-lg-12 ' style={{ top: '20', color: '#b3b3ba', fontSize: '18px' ,marginLeft:'17rem' }}>
        Customer search by LAST NAME or VAT number or MOBILE or LANDLINE PHONE
      </p>
      </div>
      </div>



      <div className='row mt-5'>
      <div className='col-md-6 col-lg-6'>
      <div class="container">
  <form novalidate class="example-form needs-validation mt-5" id="myForm">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group border-bottom">
          <label for="businessName">Name</label>
          <input type="text" class="form-control" id="businessName" name="businessName" required/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-10">
        <div class="form-group">
          <label for="loyaltyCode">Loyalty Code</label>
          <input type="text" class="form-control" id="loyaltyCode" name="loyaltyCode" required/>
        </div>
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary mt-4" style={{height:'42px'}}>
          <FaPodcast class="icon " />
        </button>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    <div class="row">
      <div class="col-md-8">
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" id="city" name="city" required/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="postal">T.K.</label>
          <input type="text" class="form-control" id="postal" name="postal" required/>
        </div>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    <div class="row">
      <div class="col-md-8">
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" id="country" name="country" required/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="countryCode">Country code</label>
          <input type="text" class="form-control" id="countryCode" name="countryCode" required/>
        </div>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="job">Profession</label>
          <input type="text" class="form-control" id="job" name="job" required/>
        </div>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    <div class="row">
      <div class="col-md-8">
        <div class="form-group">
          <label for="afm">VAT number</label>
          <input type="text" class="form-control" id="afm" name="afm" required/>
        </div>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-primary mt-4">
          <FaSearch class="icon"/>
        </button>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="doy">SEE</label>
          <input type="text" class="form-control" id="doy" name="doy" required/>
        </div>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="mobile">Mobile</label>
          <input type="text" class="form-control" id="mobile" name="mobile" required/>
        </div>
      </div>
    </div>

    {/* <!-- Repeat similar structure for other form fields --> */}

    
  </form>
</div>

     
      </div>
    </div>


    <div className='row'> 
    <div className='col-md-12 col-lg-12 mt-5'>     
     <button className='btn btn-danger col-md-4 col-lg-4 ' onClick={onRequestClose}>Cleaning</button>
      <button className='btn btn-success col-md-4 col-lg-4 ' onClick={onRequestClose}>Selection</button>
      </div>
      </div>

    </Modal>
  );
};

export default UserModal;
