document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById('nav_check');
    const nav = document.querySelector('header nav');

    checkbox.addEventListener('click', function () {
        if (this.checked) {
            nav.style.left = '0';
        } else {
            nav.style.left = '-100%';
        }
    });
});
