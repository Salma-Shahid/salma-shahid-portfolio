const projectList = [
  {
    id: 1,
    number: "01",
    title: "Task Manager",
    description:
      "A responsive task management web application built with HTML, CSS, and JavaScript that allows users to add, update, complete, and delete tasks efficiently. Designed with a clean UI and smooth interactions, this project demonstrates strong skills in DOM manipulation, event handling, and frontend logic, helping users stay organized and productive.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "./images/task-manager.png",
    liveLink: "https://task-manager-by-salma.netlify.app/",
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
    liveLink: "https://salmashahid-portfolio.netlify.app/",
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
    liveLink: "https://calculator-by-salma.netlify.app/",
    githubLink: "https://github.com/Salma-Shahid/Calculator1",
  },
  {
    id: 4,
    number: "04",
    title: "Gemini-Clone-Project",
    description:
      "A modern AI chatbot application inspired by Google Gemini, built using React.js and Vite. This project provides a clean and responsive user interface where users can interact with AI in real-time.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Vite",
      "Google Gemini API",
    ],
    image: "./images/gemini-clone.png",
    liveLink: "https://gemini-cloneproject.netlify.app/",
    githubLink: "https://github.com/Salma-Shahid/Gemini-clone",
  },
  {
    id: 5,
    number: "05",
    title: "Poder-Monie",
    description:
      "Nigeria's mobile-first investment platform landing page. Built with React, Vite, and Tailwind CSS.",
    techStack: ["React Js", "Vite", "Node Js", "Tailwind Css"],
    image: "./images/poder-monie.png",
    liveLink: "poder-monie.vercel.app",
    githubLink: "https://github.com/Salma-Shahid/poder-monie",
  },
  {
    id: 6,
    number: "06",
    title: "Code-Axis-Technologies",
    description:
      "Code Axis Technologies is a modern, professional fellowship program website designed to showcase academic and professional development opportunities. The website is built with cutting-edge technologies including React 18, Vite, and Tailwind CSS.",
    techStack: ["React Js", "Vite", "Node Js", "Tailwind CSS", "Zustand"],
    image: "./images/code-axis.png",
    liveLink: "code-axis-technologies.vercel.app",
    githubLink: "https://github.com/Salma-Shahid/Code-Axis-Technologies",
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
          <a href=${projectContent?.liveLink}>Live</a>
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
