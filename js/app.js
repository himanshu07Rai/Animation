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

// gsap.to(
//     ".animate2",
//     {
//         x:400,
//         opacity:0.5,
//         rotate:180,
//         delay:5,
//         duration:2
//     }
// )

gsap.from(
    ".item-1",
    {
        x:-100,
        ease:"power1.inOut",
        duration:1.2,
        opacity:0
    }
)
gsap.from(
    ".item-2",
    {
        x:100,
        opacity:0,
        ease:"power1.inOut",
        duration:1.2
    }
)