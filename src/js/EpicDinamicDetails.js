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

    // Chama a função pra ocultar os elementos com atraso
    hideElementsWithDelay(themeSection, epicId);

    // Ajusta a propriedade 'left' para .hide-epic e .frame-infos-action
    adjustHideEpicStyle(epicId);

    console.log(epicId);
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

// Função para ajustar o estilo 'left' da classe .hide-epic e .frame-infos-action exclusivamente para o epicId com matchMedia para responsividade
const adjustHideEpicStyle = (epicId) => {
    const epicFrame = document.getElementById(epicId);

    if (epicFrame) {
        const theme = epicFrame.closest('.mockups-stack').id;
        const hideEpicElement = epicFrame.querySelector(`.hide-${theme}-epic`);
        const frameInfosAction = epicFrame.querySelector('.frame-infos-action');

        const updateStyles = () => {
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

        updateStyles();

        // Adiciona um listener para mudanças na largura da tela
        const mediaQueries = [
            window.matchMedia('(min-width: 768px)'),
            window.matchMedia('(min-width: 400px) and (max-width: 767px)'),
            window.matchMedia('(max-width: 399px)')
        ];

        mediaQueries.forEach((mq) => mq.addEventListener('change', updateStyles));
    }
};

