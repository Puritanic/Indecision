import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
    // isOpen can be set to =true, but if not stated otherwise statement like this are always true so that can be omitted
    <Modal
        isOpen={!!props.selected}
        contentLabel="SelectedOption"
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selected && <p className="modal__body">{props.selected}</p>}
        <button className="button" onClick={props.closeModal}>Okay</button>
    </Modal>
);

export default OptionModal;
