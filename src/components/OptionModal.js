import React from 'react';
import Modal from 'react-modal';
import { random } from '../helpers';

const OptionModal = props => (
    // isOpen can be set to =true, but if not stated otherwise statement like this are always true so that can be omitted
    <Modal
        isOpen={!!props.selected}
        contentLabel="SelectedOption"
        onRequestClose={props.closeModal}
    >
        <h3>{random(props.options)}</h3>
        <button onClick={props.closeModal}>Okay</button>
    </Modal>
);

export default OptionModal;
