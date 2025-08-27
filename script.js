function loadingAnimation() {
    var tl = gsap.timeline();

    // Animate loader text lines
    tl.from(".line h1", {
        y: 200,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    });

    // Animate percentage counter
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            let h5 = document.querySelector("#line1-part1 h5");
            let grow = 0;
            let interval = setInterval(function () {
                if (grow < 100) {
                    h5.textContent = grow++;
                } else {
                    h5.textContent = grow;
                    clearInterval(interval);
                }
            }, 35);
        },
    });

    // Animate secondary text
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 0,
    });

    // Fade out loader
    tl.to("#loader", {
        opacity: 0,
        duration: 0.6,
        delay: 0,
        onComplete: function () {
            document.querySelector("#loader").style.display = "none";
        },
    });

    // Animate page content
    tl.from("#page1", {
        y: 1200, // Correct property
        opacity: 0,
        duration: 0.6,
        
    });
    
    tl.from("#nav",{
        opacity:0,
    });
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
        y:150,
        stagger:0.3,
    });
}

function CursorAnimation(){
    // Custom cursor movement
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    
    // Magnet effect on nav items
Shery.makeMagnet("#nav-part2 h4", {
    // strength: 30,
    // distance: 100
});
}


loadingAnimation();
CursorAnimation();

// document.querySelectorAll("#nav-part2 h4").forEach((elem) => {
//     elem.addEventListener("mousemove", function (e) {
//         let rect = elem.getBoundingClientRect();
//         let x = e.clientX - rect.left - rect.width / 2;
//         let y = e.clientY - rect.top - rect.height / 2;

//         gsap.to(elem, {
//             x: x * 0.6, // sensitivity
//             y: y * 0.6,
//             scale: 1.2,
//             duration: 0.3,
//             ease: "power3.out"
//         });
//     });

//     elem.addEventListener("mouseleave", function () {
//         gsap.to(elem, {
//             x: 0,
//             y: 0,
//             scale: 1,
//             duration: 0.5,
//             ease: "elastic.out(1, 0.3)"
//         });
//     });
// });

