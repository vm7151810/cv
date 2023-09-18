var image1 = document.getElementsByClassName('thumbnail');
new simpleParallax(image1, {
	orientation: 'right',
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
});

var navbar = document.getElementById("nav");
var side = 0 ;

function hamburgerToCross(x) {
    x.classList.toggle("change");
    if (side == 1) {
        navbar.style.top = "-60px";
        side = 0 ;
    }
    else {
        navbar.style.top = "8px";
        side = 1 ;
    }
}

const cursor = document.querySelector(".cursor") ;
document.addEventListener("mousemove", (e) => {
    let x = e.pageX ;
    let y = e.pageY ;
    cursor.style.top = y + "px" ;
    cursor.style.left = x + "px" ;
});