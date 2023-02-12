var video = document.getElementById('video'), fraction = 0.8;

function checkscroll() {
    var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        video.play();
    } else {
        video.pause();
    }
} checkscroll();
window.addEventListener('scroll', checkscroll, false);
window.addEventListener('resize', checkscroll, false);    