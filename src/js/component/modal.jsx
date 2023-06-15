import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BSModal from 'react-bootstrap/Modal';
import BSForm from './form.jsx';

function Modal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add a contact
      </Button>

      <BSModal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <BSModal.Header closeButton>
          <BSModal.Title id="example-custom-modal-styling-title">
            Add contact
          </BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>
          <BSForm></BSForm>
        </BSModal.Body>
      </BSModal>
    </>
  );
}

export default Modal;