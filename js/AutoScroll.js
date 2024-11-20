document.addEventListener('DOMContentLoaded', function () {
    console.log('Script cargado correctamente');
    const scrollContainer = document.querySelector('.team-scroll');
    const scrollSpeed = 2; 

    function autoScroll() {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
        }

        requestAnimationFrame(autoScroll);
    }
    const children = [...scrollContainer.children];
    children.forEach(child => {
        const clone = child.cloneNode(true);
        scrollContainer.appendChild(clone);
    });

    autoScroll();
});
