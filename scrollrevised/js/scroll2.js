const elSections = document.querySelectorAll('section');

/* SCROLLIFY CONFIG
============================= */
$.scrollify({
  section: "section",
  sectionName: "name",
  easing: "easeOutExpo",
  scrollSpeed: 1000,
  offset: 0,
  scrollbars: true,
  interstitialSection : "",
  overflowScroll: true
});

//force viewport of parallax to be longer than full screen

// $.scrollify({
//   section : "section",
//   sectionName : "section-name",
//   interstitialSection : "",
//   easing: "easeOutExpo",
//   scrollSpeed: 1100,
//   offset : 0,
//   scrollbars: true,
//   standardScrollElements: "parallax",
//   setHeights: true,
//   overflowScroll: true,
//   updateHash: true,
//   touchScroll:true,
//   before:function() {},
//   after:function() {},
//   afterResize:function() {},
//   afterRender:function() {}
// });

// $.scrollify({
//   section: "section",
//   sectionName: "name",
//   interstitialSection: "",
//   easing: "easeOutCubic",
//   scrollSpeed: 1000,
//   offset: 0,
//   scrollbars: true,
//   standardScrollElements: "",
//   setHeights: true,
//   overflowScroll: true,
//   updateHash: true,
//   touchScroll: true,
// });
