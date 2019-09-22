// var image = document.getElementsByClassName('collageDesktop');
// new simpleParallax(image);

var images = document.querySelectorAll('img.naggers');
new simpleParallax(images, {
    orientation: 'up',
    scale: 1.1,
});
