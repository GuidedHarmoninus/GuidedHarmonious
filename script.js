document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.centered-text').style.animation = 'none';
        document.querySelector('.centered-text').style.display = 'none';
        const contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.style.display = 'block';
        setTimeout(function() {
            contentWrapper.style.opacity = 1;
        }, 500);
        window.scrollTo(0, 0);
    }, 2000);
});

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 确保标题在屏幕的上侧
}

function toggleTOC() {
    const toc = document.getElementById('toc');
    toc.style.display = toc.style.display === 'block' ? 'none' : 'block';
}