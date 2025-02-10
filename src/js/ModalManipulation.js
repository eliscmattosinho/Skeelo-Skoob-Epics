import { useState } from 'react';

export function useModal() {
    const usContainer = document.querySelector(".user-story-details");
    const dodContainer = document.querySelector(".dod-details");

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        productName: '',
        title: '',
        contentType: '',
        contentData: []
    });

    const openModal = (title, contentType, contentData) => {
        setModalData({ title, contentType, contentData });    
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, modalData, openModal, closeModal };
}
