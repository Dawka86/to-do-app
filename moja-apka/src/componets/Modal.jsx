import React from 'react';
import './Modal.css';

function Modal({ closeModal,handleConfirmDelete }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='closeButton' onClick={() => closeModal()}>
          X
        </button>
        <div className='title'>
          <h1>Are you sure?</h1>
        </div>
        <div className='body'>
          <p>Do you want to delete this task?</p>
        </div>
        <div className='footer'>
          <button className='btn cancelButton' onClick={() => closeModal()}>
            Cancel
          </button>
          <button className=' btn continueButton' onClick={handleConfirmDelete}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
