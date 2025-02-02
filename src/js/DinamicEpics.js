window.onload = function () {
    const container = document.querySelector(".skeelo-range");

    if (!container) {
        console.error("Elemento não encontrado no DOM.");
        return;
    }

    const items = Array.from(container.children);
    const scrollSpeed = 1;

    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    function autoScroll() {
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
        }
        
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
};
