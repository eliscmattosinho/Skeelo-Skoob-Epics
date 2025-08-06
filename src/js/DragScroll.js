export function enableDragScroll(element) {
    if (!element) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const startDrag = (clientX) => {
        isDragging = true;
        startX = clientX;
        scrollStart = element.scrollLeft;
        element.classList.add('dragging');
    };

    const drag = (clientX) => {
        if (!isDragging) return;
        const deltaX = clientX - startX;
        element.scrollLeft = scrollStart - deltaX;
    };

    const endDrag = () => {
        isDragging = false;
        element.classList.remove('dragging');
    };

    // Mouse
    element.addEventListener('mousedown', (e) => startDrag(e.clientX));
    window.addEventListener('mousemove', (e) => drag(e.clientX));
    window.addEventListener('mouseup', endDrag);

    // Touch
    element.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX), { passive: true });
    window.addEventListener('touchmove', (e) => drag(e.touches[0].clientX), { passive: true });
    window.addEventListener('touchend', endDrag);
}
