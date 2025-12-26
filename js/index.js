const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const mobileNavToggleLine2 =  document.querySelector(".mobile-nav-toggle-line-2");
const mobileNavToggleLine3 =  document.querySelector(".mobile-nav-toggle-line-3");
const mobileNavToggleLine1 =  document.querySelector(".mobile-nav-toggle-line-1");


function toggleMobileNav(){
    mobileNavLinks.classList.toggle("active-mobile-nav-links");

    // annimation 
    mobileNavToggleLine2.classList.toggle("active-mobile-nav-toggle-line-2");
    mobileNavToggleLine1.classList.toggle("active-mobile-nav-toggle-line-1");
    mobileNavToggleLine3.classList.toggle("active-mobile-nav-toggle-line-3");
}
mobileNavToggleBtn.addEventListener("click" , ()=> {
    toggleMobileNav();
})


mobileNavLinks.addEventListener("click" , (e) => {
    if(e.target.tagName === "A"){
       toggleMobileNav();
    }
})