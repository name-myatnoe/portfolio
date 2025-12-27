const experiences = [
    {
        company: "Frontiir",
        position: "Junior Mobile Developer",
        year: "Dec 2024 "
    },
    {
        company: "Frontiir",
        position: "Junior Mobile Developer",
        year: "Dec 2024 "
    },
    {
        company: "Frontiir",
        position: "Junior Mobile Developer",
        year: "Dec 2024 "
    }
]
const expTimeline = document.querySelector(".timeline");
experiences.forEach((exp) => {
    const timelineItem = ` 
    <div class="timeline-item">
            <div class="date">${exp.year}</div>
            <div class="smile">
                    <img src="./imgs/exp-3.png" alt="smile-img" class="smile-img">
            </div>
            <div class="content">
                    <div class="company">${exp.company}</div>
                    <div class="position">${exp.position}</div>
            </div>
        </div>
    `
    expTimeline.innerHTML += timelineItem;
});