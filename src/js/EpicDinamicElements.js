export function initializeNavigation(previousButton, nextButton, navItems) {
    let currentIndex = 0;

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

        // gambs prévia
        if (currentIndex === navItems.length - 5) {
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
