document.addEventListener('DOMContentLoaded', function() {
    const centeredText = document.querySelector('.centered-text');
    const contentWrapper = document.querySelector('.content-wrapper');

    // 设置一个定时器，在动画结束后隐藏文本并显示内容
    setTimeout(function() {
        centeredText.style.display = 'none';
        contentWrapper.style.display = 'block';
        setTimeout(function() {
            contentWrapper.style.opacity = 1;
        }, 500);
        window.scrollTo(0, 0);
    }, 3000); // 3秒后执行，与动画时间一致
});

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 确保标题在屏幕的上侧
}

function toggleTOC() {
    const toc = document.getElementById('toc');
    toc.style.display = toc.style.display === 'block' ? 'none' : 'block';
}