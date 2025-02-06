export const handleEpicDetails = (epicId, theme) => {
    const epicFrame = document.getElementById(epicId);
    if (!epicFrame) {
        console.error(`Não foi possível encontrar o épico com id ${epicId}`);
        return;
    }

    // Seleciona a seção diretamente para o tema correto
    const themeSection = document.querySelector(`#${theme} .mockups-stack`);
    if (!themeSection) {
        console.error(`Não foi possível encontrar a seção do tema ${theme}`);
        return;
    }

    // Esconde todos os épicos do tema, exceto o selecionado
    const sections = themeSection.querySelectorAll('.mockup-frame');
    sections.forEach(section => {
        if (section.id !== epicId) {
            section.classList.add('hide');
        } else {
            section.classList.remove('hide');
        }
    });

    // Ocultar elementos com atraso
    hideElementsWithDelay(themeSection, epicId, theme);

    // Ajustar estilos do épico
    adjustHideEpicStyle(epicId, theme);

    // Mostra a seção de detalhes do épico desbloqueado para o tema específico
    setTimeout(() => {
        showEpicDetailsSection(epicId, theme);
    }, 500);
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
const hideElementsWithDelay = (themeSection, epicId, theme) => {
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

const getEpicElements = (epicId, theme) => {
    const epicFrame = document.getElementById(epicId);
    if (!epicFrame) return {};
    
    return {
        hideEpicElement: epicFrame.querySelector(`.hide-${theme}-epic`),
        frameInfosAction: epicFrame.querySelector('.frame-infos-action')
    };
};

const adjustHideEpicStyle = (epicId, theme) => {
    const { hideEpicElement, frameInfosAction } = getEpicElements(epicId, theme);
    if (!hideEpicElement && !frameInfosAction) return;
};

const getElements = (theme) => {
    return {
        blockElements: document.querySelector(`#${theme} .block-elements-details`),
        mockupsStack: document.querySelector(`#${theme} .mockups-stack`),
        framesBlock: document.querySelector(`#${theme} .frames-block`)
    };
};

const configureFramesBlock = (framesBlock) => {
    framesBlock.style.margin = '20px';

    if (window.matchMedia('(min-width: 768px)').matches) {
        framesBlock.style.transition = 'transform 0.3s ease-in-out';
        framesBlock.style.transform = 'translateX(-10px)';
    }
};

const configureBlockElements = (blockElements, mockupsStack) => {
    blockElements.classList.remove('hide');

    if (window.matchMedia('(min-width: 768px)').matches) {
        mockupsStack.style.position = 'relative';
        blockElements.style.position = 'absolute';
        blockElements.style.transition = 'opacity 0.5s linear';
        blockElements.style.opacity = '1';
    } else if (window.matchMedia('(min-width: 400px) and (max-width: 767px)').matches) {
        blockElements.style.transition = 'opacity 0.5s linear, transform 0.5s ease-in-out';
        blockElements.style.opacity = '1';
        blockElements.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            blockElements.style.transition = 'transform 0.5s ease-in-out';
            blockElements.style.transform = 'translateY(10px)';
        }, 50);
    }
};

const showEpicDetailsSection = (epicId, theme) => {
    const { blockElements, mockupsStack, framesBlock } = getElements(theme);

    // Garante que apenas a seção do épico atual aparece
    const allDetailSections = document.querySelectorAll('.block-elements-details');
    allDetailSections.forEach(section => {
        section.style.display = 'none';
    });

    blockElements.style.display = 'flex';

    configureFramesBlock(framesBlock);
    
    setTimeout(() => {
        configureBlockElements(blockElements, mockupsStack);
    }, 500);
};
