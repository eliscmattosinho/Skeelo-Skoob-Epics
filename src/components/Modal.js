import React from 'react';
import './Modal.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

import USSkeelo from "../assets/modal/us-modal-skeelo.svg";
import DoDSkeelo from "../assets/modal/dod-modal-skeelo.svg";
import USSkoob from "../assets/modal/us-modal-skeelo.svg";
import DoDSkoob from "../assets/modal/dod-modal-skoob.svg";

const imageMap = {
    skeelo: {
        userStories: USSkeelo,
        definitionOfDone: DoDSkeelo
    },
    skoob: {
        userStories: USSkoob,
        definitionOfDone: DoDSkoob
    }
};

function Modal({ isOpen, onClose, title, productName, contentType, contentData }) {
    if (!isOpen) return null;

    const image = imageMap[productName]?.[contentType];

    return (
        <div className="modal-container">
            <span className="close-icon close-icon-modal" onClick={onClose}>
                <IoIosCloseCircleOutline />
            </span>
            <div className="modal-block">
                <div className="modal-header">
                    <img className='modal-image' src={image} alt='' />
                    <h2 className="modal-title">{title}</h2>
                </div>
                <div className="modal-content" dangerouslySetInnerHTML={{ __html: contentData }} />
            </div>
        </div>
    );
}

export default Modal;
