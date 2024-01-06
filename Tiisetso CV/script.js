const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


const tl = gsap.timeline();

tl.from(".left_side", {
    opacity: 0,
    x: -700,
    duration: .6,
    ease: "expo.inOut"
})

tl.from(".right_side", {
    opacity: 0,
    x: 700,
    duration: .6,
    ease: "expo.inOut",
}, 0)

tl.from(".imgBx", {
    x: -600,
    duration: 1.4,
    ease: "bounce"
})









const splitTypes = document.querySelectorAll('.reveal-type');
splitTypes.forEach((char, i) => {
    const textSplit = new SplitType(char, { types: 'chars' });
    gsap.from(textSplit.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 100%',
            end: 'top 0%',
            scrub: false,
            markers: false
        },
        scaleY: 0,
        y: -20,
        opacity: 0,
        transformOrigin: 'top',
        stagger: 0.1,
        duration: .1
    });
});