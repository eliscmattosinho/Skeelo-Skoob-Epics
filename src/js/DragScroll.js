export function enableDragScroll(element) {
    if (!element) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
        isDown = true;
        element.classList.add('dragging');
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
    };

    const mouseLeaveHandler = () => {
        if (!isDown) return;
    };

    const mouseUpHandler = () => {
        isDown = false;
        element.classList.remove('dragging');
    };

    const mouseMoveHandler = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 1.5;
        element.scrollLeft = scrollLeft - walk;
    };

    element.addEventListener('mousedown', mouseDownHandler);
    element.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    return () => {
        element.removeEventListener('mousedown', mouseDownHandler);
        element.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
    };
}
