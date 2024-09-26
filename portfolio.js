document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar span');
    bars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
    });
});
