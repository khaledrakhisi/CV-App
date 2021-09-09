import React from 'react';

import Modal from './Modal';
import Button from '../UIElements/Button';

const ErrorModal = props => {

  let content = {
    EN: {
      text1:"An Error has Occurred!",
    },
    DE:{
      text1:"Ein Fehler ist aufgetreten!",
    }
  }
  content = props.language === "EN" ? content.EN : content.DE;

  return (
    <Modal
      onCancel={props.onClose}
      header={content.text1}
      show={!!props.errorMessage}
      footer={<Button type="button" onClick={props.onClose}>Okay</Button>}
    >
      <p>{props.errorMessage}</p>
    </Modal>
  );
};

export default ErrorModal;
