// var tl = anime.timeline({
//   loop: true,
//   autoplay: true,
//   duration: 2000,
//     });
//
// tl
// .add({
var outlineTime = 3420;
var lineDrawing = anime({
  targets: "#fuk",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutCubic",
  // opacity: 0,
  duration: outlineTime,
  delay: function(el, i) {
    return outlineTime * i;
  },
  begin: function(anim) {
    // opacity: 100,
    var line = document.querySelectorAll("path"),
      i;

    for (i = 0; i < line.length; ++i) {
      line[i].setAttribute("stroke", "none");
      line[i].setAttribute("fill", "none");
    }
  },
  loop: true
// }),
});
