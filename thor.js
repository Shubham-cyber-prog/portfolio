gsap.to(".box1",{
    x:1500,
    duration :1.5,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"blue",
    scale:0.5,
    repeat:-1,
    yoyo:true,
})
gsap.from(".box2",{
    x:1000,
    y:1000,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"blue",
    repeat:-1,

})
gsap.to(".box3",{
    x:1000,
    y:500,
    duration:3,
    delay:1,
    rotate:120,
    borderRadius:"50%",
    backgroundColor:"blue",
    stagger:0.5,
    repeat:-1,
})
gsap.from(".box4",{
    x:1500,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"goldenrod",
    stagger:0.5,
    repeat:-1,
    yoyo:true,
})
gsap.from(".text-info",{
    y:20,
    opacity:0,
    color:"blue",
    duration:1,
    delay:1,
    stagger:0.5,
    scale:0.5,
})

function myMenuFunction(){
    var menuBth = document .getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    }else{
        menuBth.className = "nav-menu";
    }
}
function downloadCV(){
    const cvLink = "Subham_Nayak_cv.pdf";
    window.open(cvLink,"_blank");
}

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",() =>{
    body.classList.toggle("dark");
});


var typingEffect = new Typed(".typedText",{
    strings: ["Frontend Developer", "Coder"],

    loop:true,
    typeSpeed: 120,
    backSpeed:100,
    backDelay:2000,
});
