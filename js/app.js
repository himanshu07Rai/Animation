gsap.fromTo(
    ".animate",
    {
        opacity:0,
        y:-100,

    },
    {
        y:200,
        delay:1.5,
         opacity: 1,
        duration : 3,
        ease:"bounce.out",
        repeat:10,
        yoyo:true,
    }
)

gsap.to(
    ".animate2",
    {
        x:400,
        opacity:0.5,
        rotate:180,
        delay:5,
        duration:2
    }
)

gsap.from(
    ".a",
    {
        delay:4,
        x:-100,
        ease:"bounce.in",
        duration:2
    }
)
gsap.from(
    ".b",
    {
        delay:4,
        y:-500,
        ease:"bounce.in",
        duration:2
    }
)