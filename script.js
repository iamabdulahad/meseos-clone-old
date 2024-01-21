
function loaderAnimation(){
    var tl = gsap.timeline()


    tl.from("#loader h1",{
        y:200,
        stagger:0.25,
        duration:0.6,
        delay:0.5
    });
    
    tl.from("#line1-part1",{
        opacity:0,
        onStart:(function(){
            var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
    setInterval(function(){
       if(grow<=100){
           h5timer.innerHTML = grow++; 
        }
    },33)
        })
    });

    tl.to(".line h2",{
        animationName:"anime",
        opacity:1
    })
    
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3.3,
        display:"none"
    });

    tl.from("#page1",{
        delay:0.2,
        y:1600,
        duration:0.5,
        opacity:0,
        ease:Power4
    })

    tl.from(".hero h1, .hero h2",{
        y:150,
        stagger:0.1,
    });

    tl.from("#nav",{
        opacity:0,
    })
}

function cursorAnimation(){

    Shery.makeMagnet("#nav-part2 h4, .menu-opener__square");

    document.addEventListener("mousemove", function(dets){
         gsap.from("#crsr",{
            left:dets.x,
            top:dets.y,
         })
    })
}

loaderAnimation();
cursorAnimation();




