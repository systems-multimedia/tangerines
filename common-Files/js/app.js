var footer = document.querySelector('footer');
var header = document.querySelector('header');
var app = document.querySelector('#app');

window.addEventListener('load', function () { checkFooterPosition(); });
window.addEventListener('click', function () { checkFooterPosition(); });
window.addEventListener('resize', function () { checkFooterPosition(); });

function checkFooterPosition() {
    var distance = window.innerHeight - footer.getBoundingClientRect().bottom;
    if (distance > 0) {
        var move = "translateY(" + distance + "px)";
        footer.style.transform = move;
    }
}