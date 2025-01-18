document.addEventListener('DOMContentLoaded', function() {
    // 随机选择背景图片
    const backgrounds = ['background.webp', 'background02.webp', 'background03.webp'];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.getElementById('background').style.backgroundImage = `url(${randomBackground})`;

    // 渐显“导和文章先遣”
    document.getElementById('welcome-text').style.opacity = 1;

    // 渐隐“导和文章先遣”后渐显正文
    setTimeout(() => {
        document.getElementById('welcome-text').style.opacity = 0;
        document.getElementById('main-content').style.display = 'block';
        setTimeout(() => {
            window.scrollTo(0, 0); // 滚动到正文最上方
        }, 2000);
    }, 4000);

    // 目录按钮点击事件
    const toggleToc = document.getElementById('toggle-toc');
    const toc = document.getElementById('toc');

    toggleToc.addEventListener('click', () => {
        toc.classList.toggle('hidden');
    });
});