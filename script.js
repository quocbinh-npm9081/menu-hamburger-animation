let menuOpen = 'close';
const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
    if (menuOpen == 'close') {
        menuBtn.classList.add('open');
        menuOpen = 'open';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = 'close';
    }
});