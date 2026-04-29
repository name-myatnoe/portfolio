const email = document.getElementById("email");
const phone = document.getElementById("phone");

const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            type("A Software Engineer", entry.target);
        }
    });
});

const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            type("A Software Engineer", entry.target);
        }
    });
});

typeObserver.observe(email);
typeObserver.observe(phone);