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
