const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const mobileNavToggleLine1 = document.querySelector(".mobile-nav-toggle-line1");
const mobileNavToggleLine2 = document.querySelector(".mobile-nav-toggle-line2");
const mobileNavToggleLine3 = document.querySelector(".mobile-nav-toggle-line3");

mobileNavToggleBtn.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("active-mobile-nav-links");
    
    mobileNavToggleLine1.classList.toggle("active-mobile-nav-toggle-line1");
    mobileNavToggleLine2.classList.toggle("active-mobile-nav-toggle-line2");
    mobileNavToggleLine3.classList.toggle("active-mobile-nav-toggle-line3");
})

mobileNavLinks.addEventListener("click", (e)=> {
    if(e.target.tagName === "a"){
        mobileNavLinks.classList.toggle("active-mobile-nav-links");
    }
})
console.log(mobileNavToggleBtn);