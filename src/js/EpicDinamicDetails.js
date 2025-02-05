export const handleEpicDetails = (epicId) => {
    const themeSection = document.getElementById(`${epicId}`).closest('.mockups-stack');

    if (!themeSection) {
        console.error(`Não foi possível encontrar a seção com id ${epicId}`);
        return;
    }

    const sections = themeSection.querySelectorAll('.mockup-frame');

    sections.forEach(section => {
        if (section.id !== epicId) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });

    // Ocultar elementos com delay
    hideElementsWithDelay(themeSection, epicId);

    // Ajustar estilos
    adjustHideEpicStyle(epicId);

    // Espera a transição e mostra os detalhes épicos
    setTimeout(() => {
        showEpicDetailsSection();
    }, 1000);
};

// Função para animar o desbloqueio antes de ocultar os elementos
const unlockAnimation = (element, callback) => {
    if (element) {
        element.style.opacity = '1';
        element.style.transition = 'opacity 0.5s ease-out';
        element.style.opacity = '0';

        setTimeout(() => {
            callback();
        }, 500);
    }
};

// Função para ocultar os elementos com atraso e acionar a transição
const hideElementsWithDelay = (themeSection, epicId) => {
    const theme = themeSection.id;

    setTimeout(() => {
        const epicFrame = themeSection.querySelector(`#${epicId}`);

        if (epicFrame) {
            const hideEpicElement = epicFrame.querySelector(`.hide-${theme}-epic`);
            const frameInfosAction = epicFrame.querySelector('.frame-infos-action');

            if (hideEpicElement) {
                unlockAnimation(hideEpicElement, () => {
                    hideEpicElement.style.display = 'none';
                });
            }

            if (frameInfosAction) {
                unlockAnimation(frameInfosAction, () => {
                    frameInfosAction.style.display = 'none';
                });
            }
        }
    }, 500);
};

const getEpicElements = (epicId) => {
    const epicFrame = document.getElementById(epicId);
    if (!epicFrame) return {};
    
    const theme = epicFrame.closest('.mockups-stack')?.id;
    return {
        hideEpicElement: epicFrame.querySelector(`.hide-${theme}-epic`),
        frameInfosAction: epicFrame.querySelector('.frame-infos-action')
    };
};

const updateElementStyles = (hideEpicElement, frameInfosAction) => {
    if (hideEpicElement) {
        if (window.matchMedia('(min-width: 768px)').matches) {
            hideEpicElement.style.left = '10px';
        } else if (window.matchMedia('(min-width: 400px) and (max-width: 767px)').matches) {
            hideEpicElement.style.left = '9px';
        } else {
            hideEpicElement.style.left = '-5px';
        }
    }

    if (frameInfosAction) {
        if (window.matchMedia('(min-width: 400px) and (max-width: 768px)').matches) {
            frameInfosAction.style.left = '10px';
        } else {
            frameInfosAction.style.left = '0px';
        }
    }
};

const addMediaQueryListeners = (callback) => {
    const mediaQueries = [
        window.matchMedia('(min-width: 768px)'),
        window.matchMedia('(min-width: 400px) and (max-width: 767px)'),
        window.matchMedia('(max-width: 399px)')
    ];
    mediaQueries.forEach((mq) => mq.addEventListener('change', callback));
};

const adjustHideEpicStyle = (epicId) => {
    const { hideEpicElement, frameInfosAction } = getEpicElements(epicId);
    if (!hideEpicElement && !frameInfosAction) return;
    
    const updateStyles = () => updateElementStyles(hideEpicElement, frameInfosAction);
    updateStyles();
    addMediaQueryListeners(updateStyles);
};


const configureFramesBlock = (framesBlock) => {
    framesBlock.style.transition = 'transform 0.3s ease-in-out';
    framesBlock.style.transform = 'translateX(-10px)';
    framesBlock.style.margin = '20px';
};

const getTheme = () => {
    const themeElement = document.querySelector('.frames-block');
    return themeElement.className.split(' ').find(cls => cls !== 'frames-block');
};

const getElements = (theme) => {
    return {
        blockElements: document.querySelector('.block-elements-details'),
        mockupsStack: document.querySelector(`#${theme}.mockups-stack`),
        framesBlock: document.querySelector(`.frames-block.${theme}`)
    };
};

// Horrível, porém funcional
const configureBlockElements = (blockElements, mockupsStack) => {
    blockElements.classList.remove('hide');

    if (window.matchMedia('(min-width: 400px) and (max-width: 767px)').matches) {
        mockupsStack.style.position = 'relative';
        blockElements.style.position = 'absolute';
        blockElements.style.transition = 'opacity 0.5s linear';
        blockElements.style.opacity = '1';
    }
};

const showEpicDetailsSection = () => {
    const theme = getTheme();
    const { blockElements, mockupsStack, framesBlock } = getElements(theme);
    
    configureFramesBlock(framesBlock);
    
    setTimeout(() => {
        configureBlockElements(blockElements, mockupsStack);
    }, 500);
    
    framesBlock.addEventListener('transitionend', () => {}, { once: true });
};

// Função para conectar frame ao bloco de elementos de contexto, para fazer com que o bloco de elementos apareça corretamente para seu frame de ligação