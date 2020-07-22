const timeline = anime.timeline({
    loop: true,
    autoplay: true,
    // autoplay: true,
    duration: 200,
    easing: 'easeInOutSine',
    });
    
    timeline.add({
    targets: '#sun',
    duration: 100,
    opacity: [100, 0]
    }, '+=0')
    
    .add({
    duration: 2000,
    })