export function initializeNavigation(previousButton, nextButton, navItems, currentBlock, currentEpic) {
    let currentIndex = currentBlock;

    function updateNavigation() {
        // Verifica os blocos do épico específico
        const epicBlocks = navItems.filter(item => item.dataset.epicId === currentEpic.identificador);

        // Atualiza visibilidade dos blocos
        epicBlocks.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });

        if (currentIndex === 0) {
            previousButton.style.visibility = 'hidden';
        } else {
            previousButton.style.visibility = 'visible';
        }

        if (currentIndex === 3) {
            nextButton.style.visibility = 'hidden';
        } else {
            nextButton.style.visibility = 'visible';
        }
    }

    updateNavigation();

    previousButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateNavigation();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < navItems.length - 1) {
            currentIndex++;
            updateNavigation();
        }
    });
}

export function initializeUserStoryNavigation() {
    const userStoryContainers = document.querySelectorAll('.user-story-details');
    const userStoryButtons = document.querySelectorAll('.epic-buttons-container .epic-button');

    if (userStoryContainers.length === 0 || userStoryButtons.length === 0) return;

    userStoryContainers.forEach((container, index) => {
        if (index === 0) {
            container.classList.remove('hide');
        } else {
            container.classList.add('hide');
        }
    });

    userStoryButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            userStoryContainers.forEach(container => container.classList.add('hide'));

            userStoryContainers[index].classList.remove('hide');
        });
    });
}
