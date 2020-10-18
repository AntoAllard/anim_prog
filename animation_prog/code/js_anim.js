gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    markers: true,
    start: 'top 0%',
    end: '400% 0%',
    trigger: '.wrapper-scene',
  },
  defaults: { 
    x: '40%',
    opacity: 0,
  },
})

.from('#afrique06',{})