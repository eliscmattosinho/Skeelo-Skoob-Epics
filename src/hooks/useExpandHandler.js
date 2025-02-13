import { useCallback } from 'react';

const useExpandHandler = (openModal) => {
    return useCallback((productName, epicTitle, title, contentType, contentId) => {
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            openModal(productName, epicTitle, title, contentType, contentElement.innerHTML);
        } else {
            console.error("Elemento não encontrado:", contentId);
        }
    }, [openModal]);
};

export default useExpandHandler;
