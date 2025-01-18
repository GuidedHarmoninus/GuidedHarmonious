document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.centered-text').style.animation = 'none';
        document.querySelector('.centered-text').style.display = 'none';
        document.querySelectorAll('.content').forEach(function(content) {
            content.style.display = 'block';
            setTimeout(function() {
                content.style.opacity = 1;
            }, 500);
        });
        window.scrollTo(0, 0);
    }, 2000);
});

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

function toggleTOC() {
    const toc = document.getElementById('toc');
    toc.style.display = toc.style.display === 'block' ? 'none' : 'block';
}