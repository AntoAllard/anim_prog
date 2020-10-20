//Planète

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    start: 'top 0%',
    end: '1200% 0%',
    trigger: '.wrapper-scene',
  },
  defaults: { 
    opacity: 0,
    scale: 0,
  },
})

.from('#sudArbre05',{
  xPercent: 100,
  yPercent: 0,
})
.from('#canSapin10',{
  xPercent: 50,
  yPercent: 100,
})
.from('#sudEolienne02',{
  xPercent: 50,
  yPercent: 100,
})
.from('#afrique06',{
  xPercent: 0,
  yPercent: 50,
})
.from('#automne02',{
  xPercent: 50,
  yPercent: 100,
})
.from('#sudArbre02',{
  xPercent: 50,
  yPercent: 0,
})
.from('#usArbre01',{
  xPercent: 100,
  yPercent: 100,
})
.from('#sapin06',{
  xPercent: 50,
  yPercent: 100,
})
.from('#canSapin07',{
  xPercent: 50,
  yPercent: 100,
})
.from('#sudArbre07',{
  xPercent: 50,
  yPercent: 0,
})
.from('#canEolienne02',{
  y: '-7%',
  xPercent: 0,
  yPercent: 50,
})
.from('#usArbre02',{
  xPercent: 100,
  yPercent: 100,
})
.from('#afriquePanneau06',{
  x: '7%',
  xPercent: 0,
  yPercent: 0,
})
.from('#sudArbre04',{
  xPercent: 50,
  yPercent: 0,
})
.from('#automne03',{
  xPercent: 75,
  yPercent: 100,
})
.from('#usPanneau10',{
  x: '-15%',
  xPercent: 0,
  yPercent: 0,
})
.from('#afrique04',{
  xPercent: 0,
  yPercent: 50,
})
.from('#canSapin08',{
  xPercent: 50,
  yPercent: 100,
})
.from('#eurEolienne01',{
  x: '7%',
  y: '-5%',
  xPercent: 100,
  yPercent: 50,
})
.from('#sapin03',{
  xPercent: 50,
  yPercent: 100,
})
.from('#usArbre06',{
  xPercent: 100,
  yPercent: 75,
})
.from('#sudArbre01',{
  xPercent: 100,
  yPercent: 0,
})
.from('#automne01',{
  xPercent: 50,
  yPercent: 100,
})
.from('#afrique02',{
  xPercent: 0,
  yPercent: 50,
})
.from('#afriquePanneau04',{
  x: '15%',
  xPercent: 0,
  yPercent: 0,
})
.from('#sapin02',{
  xPercent: 50,
  yPercent: 100,
})
.from('#canSapin11',{
  xPercent: 50,
  yPercent: 100,
})
.from('#automne04',{
  xPercent: 100,
  yPercent: 100,
})
.from('#canPanneau08',{
  x: '-5%',
  y: '-15%',
  xPercent: 0,
  yPercent: 0,
})
.from('#sudArbre09',{
  xPercent: 25,
  yPercent: 0,
})
.from('#sapin05',{
  xPercent: 50,
  yPercent: 100,
})
.from('#usArbre03',{
  xPercent: 100,
  yPercent: 75,
})
.from('#afrique05',{
  xPercent: 0,
  yPercent: 50,
})
.from('#sudArbre08',{
  xPercent: 50,
  yPercent: 0,
})
.from('#sapin04',{
  xPercent: 50,
  yPercent: 100,
})
.from('#afriquePanneau02',{
  x: '10%',
  xPercent: 0,
  yPercent: 0,
})
.from('#sudArbre03',{
  xPercent: 50,
  yPercent: 0,
})
.from('#usPanneau07',{
  x: '-20%',
  xPercent: 0,
  yPercent: 0,
})
.from('#usArbre04',{
  xPercent: 100,
  yPercent: 50,
})
.from('#canEolienne01',{
  y: '-7%',
  xPercent: 0,
  yPercent: 50,
})
.from('#eurEolienne02',{
  xPercent: 100,
  yPercent: 50,
  y: '-8%',
})
.from('#sudEolienne01',{
  xPercent: 50,
  yPercent: 100,
})
.from('#sudArbre06',{
  xPercent: 100,
  yPercent: 0,
})
.from('#afrique01',{
  xPercent: 0,
  yPercent: 50,
})
.from('#afriquePanneau03',{
  x: '15%',
  xPercent: 0,
  yPercent: 0,
})
.from('#ausEolienne01',{
  y: '-7%',
  xPercent: 0,
  yPercent: 50,
})
.from('#automne05',{
  xPercent: 50,
  yPercent: 100,
})
.from('#sapin01',{
  xPercent: 50,
  yPercent: 100,
})
.from('#afriquePanneau05',{
  x: '7%',
  xPercent: 0,
  yPercent: 0,
})
.from('#canSapin09',{
  xPercent: 50,
  yPercent: 100,
})
.from('#sudArbre10',{
  xPercent: 100,
  yPercent: 0,
})
.from('#afrique03',{
  xPercent: 0,
  yPercent: 50,
})
.from('#usPanneau09',{
  x: '-20%',
  xPercent: 0,
  yPercent: 0,
})
.from('#usArbre05',{
  xPercent: 100,
  yPercent: 75,
})
.from('#afriquePanneau01',{
  x: '10%',
  xPercent: 0,
  yPercent: 0,
})
.from('#sapin07',{
  xPercent: 50,
  yPercent: 100,
})
.from('#canSapin12',{
  xPercent: 50,
  yPercent: 100,
})

gsap.to('.imgTerre', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"center",
  ease: 'none',
  duration: '40', 
});

gsap.to('.imgTerre', {
  repeat: -1,
  ease: 'none',
  duration: '3',
  scale: 1.1,
  yoyo: true,
});

gsap.to('#groupeHeliceEur01', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"50% 36%",
  ease: 'none',
  duration: '3',
});

gsap.to('#groupeHeliceEur02', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"58.5% 45.5%",
  ease: 'none',
  duration: '2',
});

gsap.to('#groupeHeliceSud01', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"50% 31%",
  ease: 'none',
  duration: '4',
});

gsap.to('#groupeHeliceSud02', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"58% 41.5%",
  ease: 'none',
  duration: '1',
});

gsap.to('#groupeHeliceCan01', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"41% 56.5%",
  ease: 'none',
  duration: '5',
});

gsap.to('#groupeHeliceCan02', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"38.5% 47.5%",
  ease: 'none',
  duration: '1.5',
});

gsap.to('#groupeHeliceAu', {
  repeat: -1,
  rotation: 360,
  transformOrigin:"62% 52%",
  ease: 'none',
  duration: '2.5',
});

// Texte et dates
