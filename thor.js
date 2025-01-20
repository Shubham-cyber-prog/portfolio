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
