const projects = [
    {
        title : "Proj 1",
        desc: "bla bla bla",
        link: "https://www.google.com",
        date: "1-1-20??",
        techStack: ["React", "Node", "Postgrasql"]
    },
    {
        title : "Proj 2",
        desc: "bla bla bla",
        link: "https://www.google.com",
        date: "1-1-20??",
        techStack: ["React", "Node", "Postgrasql"]
    },
    {
        title : "Proj 3",
        desc: "bla bla bla",
        link: "https://www.google.com",
        date: "1-1-20??",
        techStack: ["React", "Node", "Postgrasql"]
    }
];

const projectContainer = document.querySelector(".project-container");
let projectsHTML = ""; 

projects.forEach((proj) => {
    const techStack = proj.techStack.map((tech) => 
        `<div class="tech-stack">${tech}</div>`
    ).join("");
    
    const projectItem = `
    <div class="project-item">
        <div class="project-shape-shadow">
            <svg viewBox="0 0 300 170">
                <path d="M 0 0 H 300 V 140 Q 220 180 150 160 Q 80 140 0 170 Z" fill="black"/>
            </svg>
        </div>

        <div class="project-shape">
            <svg viewBox="0 0 300 170">
                <path d="M 0 0 H 300 V 140 Q 220 180 150 160 Q 80 140 0 170 Z" fill="#e5e5e5" stroke="black" stroke-width="2"/>
            </svg>

            <div class="project-info">
                <h2>${proj.title}</h2>
                <small>${proj.date}</small>
                <div class="tech-stack-container">
                    ${techStack}
                </div>
            </div>

            <a class="open-link" href="${proj.link}">
                <svg viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>

        <p class="project-desc">${proj.desc}</p>
    </div>`;
    
    projectsHTML += projectItem;
});

projectContainer.innerHTML = projectsHTML;

const projObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add("show-item");
        }else{
            entry.target.classList.remove("show-item");
        }
    })
});

const proItems = document.querySelectorAll(".project-item");
proItems.forEach((proItem) => {
    projObserver.observe(proItem);
});