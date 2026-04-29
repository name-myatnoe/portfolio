const role = document.getElementById("role");
let currentInterval = null;

function type(text, element) {
    if (currentInterval) {
        clearInterval(currentInterval);
        currentInterval = null;
    }
    
    let index = 0;
    element.textContent = ""; 
    
    currentInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(currentInterval);
            currentInterval = null;
        }
    }, 200);
}

const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            type("A Software Engineer", entry.target);
        }
    });
});

typeObserver.observe(role);