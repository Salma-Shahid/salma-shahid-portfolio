const projectList = [
  {
    id: 1,
    number: "01",
    title: "Task Manager",
    description:
      "A responsive task management web application built with HTML, CSS, and JavaScript that allows users to add, update, complete, and delete tasks efficiently. Designed with a clean UI and smooth interactions, this project demonstrates strong skills in DOM manipulation, event handling, and frontend logic, helping users stay organized and productive.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "./images/task-manager.png",
    liveLink: "#",
    githubLink: "https://github.com/Salma-Shahid/Task-Manager",
  },
  {
    id: 2,
    number: "02",
    title: "Portfolio Website",
    description:
      "A modern, fully responsive developer portfolio website showcasing projects, skills, and contact information. Built using HTML, CSS, and JavaScript, the site focuses on performance, SEO optimization, mobile UX, and accessibility, creating a professional online presence for clients and recruiters.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "./images/portfolio.png",
    liveLink: "salmashahid-portfolio.netlify.app",
    githubLink: "https://github.com/Salma-Shahid/My-Portfolio",
  },
  {
    id: 3,
    number: "03",
    title: "Calculator",
    description:
      "A sleek and user-friendly web-based calculator application developed using HTML, CSS, and JavaScript. This project features a clean interface and intuitive functionality, allowing users to perform basic arithmetic operations with ease. It showcases proficiency in DOM manipulation, event handling, and responsive design principles.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "./images/calculator.png",
    liveLink: "#",
    githubLink: "https://github.com/Salma-Shahid/Calculator1",
  },
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  projects.innerHTML = `
    <div class="project-info">
        <h3>${projectContent?.number}</h3>
        <h4>${projectContent?.title}</h4>
        <p>${projectContent?.description}</p>
        <div class="tech-stack">
         ${projectContent?.techStack
           ?.map((tech, i) => {
             return `
                  <span key=${i}>${tech}</span>`;
           })
           .join(",")}

        </div>
        <hr>
        <div class="links">
          <a href=${
            projectContent?.liveLink
          }><i class="ph ph-arrow-right"></i></a>
          <a href=${
            projectContent?.githubLink
          }><i class="ph ph-github-logo"></i></a>
        </div>
      </div>
       <div class="carousel">
            <img src="${projectContent?.image}" alt=${projectContent?.title}/>
            <div class="arrows">
              <a href="#" id="previous" class=${
                previousDisabled ? "disabled-btn" : ""
              }><i class="ph ph-caret-left"></i></a>

              <a href="#" id="next" class=${
                nextDisabled ? "disabled-btn" : ""
              }><i class="ph ph-caret-right"></i></a>
            </div>
          </div>
    `;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);
