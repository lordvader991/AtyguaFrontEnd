document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.team-scroll');
    let scrollAmount = 0;
    const scrollStep = 1; 

    function autoScroll() {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
});