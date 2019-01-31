var link = document.getElementsByClassName('go-to-Product');

for (var i = 0; i < link.length; i++) {
    console.log(i);
    link[i].setAttribute('href', '../html/product.html');
}