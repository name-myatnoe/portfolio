const experiences = [
  {
    company: "bla bla1",
    position: "bla bla1",
    year: "20?? - 20??",
  },
  {
    company: "bla bla2",
    position: "bla bla2",
    year: "20?? - 20??",
  },
  {
    company: "bla bla3",
    position: "bla bla3",
    year: "20?? - 20??",
  },
];

const expTimeline = document.querySelector(".timeline");

experiences.forEach((exp) => {
  const timelineItem = `
        <div class="timeline-item">
          <div class="date">${exp.year}</div>

          <div class="smile">
            <img src="./imgs/exp-3.png" class="smile-img" />
          </div>

          <div class="content">
            <div class="company">${exp.company}</div>
            <div class="position">${exp.position}</div>
          </div>
        </div>
    `;

  expTimeline.innerHTML += timelineItem;
});

const rightContents = document.querySelectorAll(".timeline-item:nth-child(even) .content");
const leftContents = document.querySelectorAll(".timeline-item .content");
const rightDates = document.querySelectorAll(".timeline-item:nth-child(even) .date");
const leftDates = document.querySelectorAll(".timeline-item .date");

const expObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-content");
        } else {
            entry.target.classList.remove("show-content");
        }
    })
},
{threshold : 0.8}
);

rightContents.forEach((rightContent) => {
    expObserver.observe(rightContent);
});

leftContents.forEach((leftContent) => {
    expObserver.observe(leftContent);
});

rightDates.forEach((rightDate) => {
    expObserver.observe(rightDate);
});

leftDates.forEach((leftDate) => {
    expObserver.observe(leftDate);
});