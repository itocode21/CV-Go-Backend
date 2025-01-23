document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
     sections.forEach((section, index) => {
            section.style.animationDelay = `${index * 0.1}s`;
       });
});