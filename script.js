const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5]

function togglenav(){
    // toggle menu bars open/clased or hamburger/X
    menuBars.classList.toggle("change");
    // toggle menu active or not
    overlay.classList.toggle("overlay-active");
    // Overlay slide in using classes and css
     overlay.classList.toggle("overlay-slide-right");
     overlay.classList.toggle("overlay-slide-left");
    // nav items sliding animations using css animation 
    nav1.classList.toggle("slide-in-1");
    nav1.classList.toggle("slide-out-1");
    nav2.classList.toggle("slide-in-2");
    nav2.classList.toggle("slide-out-2");
    nav3.classList.toggle("slide-in-3");
    nav3.classList.toggle("slide-out-3");
    nav4.classList.toggle("slide-in-4");
    nav4.classList.toggle("slide-out-4");
    nav5.classList.toggle("slide-in-5");
    nav5.classList.toggle("slide-out-5"); }

// Event lisenters
menuBars.addEventListener("click", togglenav);
navItems.forEach((nav) => {
    nav.addEventListener("click", togglenav);
})