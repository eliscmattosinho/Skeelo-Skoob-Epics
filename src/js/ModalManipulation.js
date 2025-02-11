import { useState, useEffect } from 'react';
import { initializeUserStoryNavigation } from '../js/EpicDinamicElements';

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        productName: '',
        title: '',
        contentType: '',
        contentData: []
    });

    useEffect(() => {
        // Bloquear o scroll fora do modal
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Limpeza no efeito para remover a classe quando o componente for desmontado
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const openModal = (title, contentType, contentData) => {
        setModalData({ title, contentType, contentData });
        setIsOpen(true);
        setTimeout(() => initializeUserStoryNavigation(), 100);
        document.querySelectorAll(".overlay").forEach(overlay => overlay.classList.add("open"));
    };

    const closeModal = () => {
        setIsOpen(false);
        document.querySelectorAll(".overlay").forEach(overlay => overlay.classList.remove("open"));
    };

    return { isOpen, modalData, openModal, closeModal };
}
