document.addEventListener('DOMContentLoaded', function() {
    const initialText = document.getElementById('initial-text');
    initialText.style.opacity = 0;
    setTimeout(() => {
        initialText.style.opacity = 1;
    }, 0);
    setTimeout(() => {
        initialText.style.opacity = 0;
        document.getElementById('content').style.opacity = 1;
    }, 2000);
    
    const directoryButton = document.getElementById('directory-button');
    directoryButton.addEventListener('click', function() {
        window.open('directory.html', '_blank');
    });
});