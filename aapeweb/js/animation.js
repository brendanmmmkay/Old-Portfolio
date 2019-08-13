const timeline = anime.timeline({
loop: true,
autoplay: true,
duration: 1600,
easing: 'easeInOutSine',
});

timeline.add({
targets: '#puff',
delay: 400,
translateX: [
{
  value: [175, 85],
  duration: 900,
},
{
  value: '+=130',
  duration: 900
}
]

})
.add({
targets: '#spacer',
duration: 870,
translateX: 130,
}, '-=900')

.add({
targets: '#peakflow',
duration: 870,
translateX: [300, 130]
}, '-=900')

.add({
targets: '#outline',
duration: 870,
translateX: [110,110],
translateY: [-200, 2]
})

.add({
targets: '#aape',
duration: 870,
translateX: [96,96],
translateY: [-200, 1.5]
}, '+=900')

.add({
// targets: '#outline',
// translateX: [110, 116],
duration: 2000,
})
