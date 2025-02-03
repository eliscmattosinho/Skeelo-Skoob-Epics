window.onload = function () {
    const containers = document.querySelectorAll(".range");

    if (containers.length === 0) {
        console.error("Nenhum elemento com a classe .range encontrado no DOM.");
        return;
    }

    containers.forEach(container => {
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
    });
};
