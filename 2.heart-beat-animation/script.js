window.onload = function () {
    setInterval(() => {
        document.querySelector('.icon .heart-main').classList.remove('hover');
        document.querySelector('.icon1 .heart-main').classList.remove('hover');
        setTimeout(() => {
            heartAnimate();
        }, 500);
    }, 2500);

    function heartAnimate() {
        document.querySelector('.icon .heart-main').classList.add('hover');
        document.querySelector('.icon1 .heart-main').classList.add('hover');
    }
}