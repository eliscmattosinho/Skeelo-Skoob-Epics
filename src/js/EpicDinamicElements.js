export function initializeNavigation(previousButton, nextButton, navItems, currentBlock) {
    let currentIndex = currentBlock;

    function updateNavigation() {
        navItems.forEach((item, index) => {
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

        if (currentIndex === navItems.length - 1) {
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
