export const handleEpicDetails = (epicId, theme) => {
    //container mockups-stack
    const themeSection = document.querySelector(`#${theme} .mockups-stack`);
    // épico .mockup-frame
    const epicFrame = document.getElementById(epicId);
    
    if (!epicFrame || !themeSection) {
        console.error(`Erro ao encontrar elementos: ${epicId} ou ${theme}`);
        return;
    }

    // Inicia o processo de ocultação dos elementos com delay
    setTimeout(() => hideElementsWithDelay(themeSection, epicId, theme), 500);
};

const hideElementsWithDelay = (themeSection, epicId, theme) => {
    const epicFrame = themeSection.querySelector(`#${epicId}`);
    if (!epicFrame) return;

    // Esconde elementos com animação
    ['hide', 'frame-infos-action'].forEach(cls => {
        const element = epicFrame.querySelector(`.${cls}-${theme}-epic`) || epicFrame.querySelector(`.${cls}`);
        if (element) applyAnimation(element, () => {
            // Garanta que o elemento seja escondido após a animação
            element.style.display = 'none';
        });
    });
};

const applyAnimation = (element, callback) => {
    // Oculta o elemento completamente antes de aplicar a animação de opacidade
    element.style.display = 'flex';
    element.style.transition = 'opacity 0.5s ease-out';
    element.style.opacity = '0';
    
    // Executa a animação e depois chama o callback
    setTimeout(() => callback(), 500);
};

export const restoreEpicElements = (theme) => {
    const themeSection = document.querySelector(`#${theme} .mockups-stack`);
    if (!themeSection) {
        console.error(`Erro ao encontrar a seção do tema: ${theme}`);
        return;
    }
    
    const epicFrames = themeSection.querySelectorAll(`.mockup-frame`);
    epicFrames.forEach(epicFrame => {
        ['hide', 'frame-infos-action'].forEach(cls => {
            const element = epicFrame.querySelector(`.${cls}-${theme}-epic`) || epicFrame.querySelector(`.${cls}`);
            if (element) {
                element.style.display = 'flex';
                element.style.opacity = '1';
            }
        });
    });
};

export const addMediaQueryListeners = callback => {
    ['(min-width: 768px)', '(min-width: 400px) and (max-width: 767px)', '(max-width: 399px)']
        .map(q => window.matchMedia(q))
        .forEach(mq => mq.addEventListener('change', callback));
};