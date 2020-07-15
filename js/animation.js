const timeline = anime.timeline({
loop: true,
autoplay: true,
// autoplay: true,
duration: 200,
easing: 'easeInOutSine',
});


timeline.add({
targets: '#character',
delay: 400,
translateX: [
{
  value: [500, 600],
  duration: 900,
},
{
  value: '+=130',
  duration: 900
}
]

})

.add({
  targets: '#hat',
  duration: 20,
  translateX: [ {
    value: [500, 500],
    duration: 40
    
  } ]
  
  })


.add({
targets: '#hat',
translateY: [ {

  value: '+=90',
  duration: 200
}
]

})


.add({
targets: '#character',
duration: 100,
opacity: [100, 0]
}, '+=0')

.add({
duration: 2000,
})