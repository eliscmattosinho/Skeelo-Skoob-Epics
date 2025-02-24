import React, { useEffect } from 'react';
import './Modal.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { initializeUserStoryNavigation } from '../js/EpicDinamicElements';

import USSkeelo from "../assets/modal/us-modal-skeelo.svg";
import DoDSkeelo from "../assets/modal/dod-modal-skeelo.svg";
import USSkoob from "../assets/modal/us-modal-skoob.svg";
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
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                initializeUserStoryNavigation();
            }, 100);
        }
    }, [isOpen, contentData]);

    return (
        <div className={`modal-container ${isOpen ? 'open' : ''}`}>
            <span className="close-icon close-icon-modal" onClick={onClose}>
                <IoIosCloseCircleOutline />
            </span>
            <div className="modal-block">
                <div className="modal-header">
                    <img className='modal-image' src={imageMap[productName]?.[contentType]} alt='' />
                    <h2 className="modal-title">{title}</h2>
                </div>
                <div className="modal-content" dangerouslySetInnerHTML={{ __html: contentData }} />
            </div>
        </div>
    );
}

export default Modal;
