function initAutoScroll() {
    const containers = document.querySelectorAll(".range");

    if (containers.length === 0) {
        console.error("Nenhum elemento com a classe .range encontrado no DOM.");
        return;
    }

    containers.forEach(container => {
        if (container.dataset.cloned) return;

        const items = Array.from(container.children);
        const scrollSpeed = 1;

        items.forEach(item => {
            const clone = item.cloneNode(true);
            container.appendChild(clone);
        });

        container.dataset.cloned = "true";

        function autoScroll() {
            container.scrollLeft += scrollSpeed;

            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }

            requestAnimationFrame(autoScroll);
        }

        autoScroll();
    });
}

document.addEventListener("DOMContentLoaded", initAutoScroll);

export { initAutoScroll };
