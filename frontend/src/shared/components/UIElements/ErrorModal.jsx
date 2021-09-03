import React from 'react';

import Modal from './Modal';
import Button from '../UIElements/Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClose}
      header="An Error Occurred!"
      show={!!props.errorMessage}
      footer={<Button type="button" onClick={props.onClose}>Okay</Button>}
    >
      <p>{props.errorMessage}</p>
    </Modal>
  );
};

export default ErrorModal;
