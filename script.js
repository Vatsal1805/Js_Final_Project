


var tl=gsap.timeline()
tl.from(".line h1",{
    y:200,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
});

tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        let h5=document.querySelector("#line1-part1 h5");
let grow=0
setInterval(function(){
    if(grow<100){
   // grow++;
    h5.textContent=grow++;
    }
    else{
        h5.textContent=grow;
        clearInterval();
    }
},35);
    },
})

tl.to(".line h2",{
    animationName: "anime",
    opacity:0,
})

tl.to('#loader',{
    opacity:0,
    duration:0.5,
    delay:4,
    
})

tl.from("#page1",{
    //delay:0.2,
    zy:1200,
    opacity:0,
})

// tl.from("#page1", {
//     y: 1200,
//     opacity: 0,
//     duration: 1,
//     delay:1.5
// });
