const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => {
      a.classList.remove("active");
    });

    tab.classList.add("active");

    aboutContent.forEach((c) => {
      c.classList.remove("active");
    });

    const activeTab = tab.dataset.section;

    document.getElementById(activeTab).classList.add("active");

    if (activeTab === "experience") {
      const experiences = document.querySelector(".experience-list");

      const experienceList = [
        {
          id: 1,
          date: "2024 - 2026",
          position: "Frontend Developer",
          Company: "SMIT",
          details:
            "Built responsive and optimized UIs using HTML, CSS, and JavaScript ",
        },
        {
          id: 2,
          date: "2024 - 2026",
          position: "Backend Developer",
          Company: "SMIT",
          details:
            "Built responsive and optimized Backend using express, Node Js, and Mongo DB ",
        },
        {
          id: 3,
          date: "2024 - 2026",
          position: "FullStack Developer",
          Company: "SMIT",
          details:
            "Built responsive and optimized UIs using all frameWorks and Libraries ",
        },
      ];

      const experienceContent = experienceList
        .map((ele) => {
          return `
               <div class="experience-box" key=${ele?.id}>
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>
              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>
              <p>${ele?.details}</p>
            </div>
              `;
        })
        .join("");

      if (experiences) {
        experiences.innerHTML = experienceContent;
      }
    } else if (activeTab === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "1998 - 2000",
          degree: "Secondary School Certificate (SSC)",
          institute: "Alpha Secondary School",
          details:
            "Although my formal education is SSC, I strongly believe in skill-based learning. My focus is on writing clean code, learning modern frontend technologies, and delivering quality results. I am eager to contribute, learn from experienced developers, and grow within your organization.",
        },
      ];

      const educationContent = educationList
        .map((ele) => {
          return `
                 <div class="experience-box" key=${ele?.id}>
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>
              <div class="company-name">
                <span></span>
                <p>${ele?.institute}</p>
              </div>
              <p>${ele?.details}</p>
            </div>
            `;
        })
        .join("");

      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (activeTab === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "./images/html5-fill.png",
        },
        {
          id: 2,
          name: "CSS - Cascading style Sheet",
          icon: "./images/css3-fill.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "./images/javascript-fill.png",
        },
        {
          id: 4,
          name: "React JS",
          icon: "./images/reactjs-line.png",
        },
        {
          id: 5,
          name: "Node js",
          icon: "./images/node-js.png",
        },
        {
          id: 6,
          name: "Express",
          icon: "./images/express-js.png",
        },
        {
          id: 7,
          name: "Mongo DB",
          icon: "./images/mongo-db.png",
        },
      ];

      const skillContent = skillList
        .map((ele) => {
          return `
         <div class="skill-box" key=${ele?.id}>
            <img src=${ele?.icon} alt=${ele?.name} title=${ele?.name} loading="lazy">
           </div>
        `;
        })
        .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (activeTab === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "Salma Shahid",
        },
        {
          id: 2,
          key: "Country : ",
          value: "Pakistan",
        },
        {
          id: 3,
          key: "Industry : ",
          value: "Software & IT",
        },
        {
          id: 4,
          key: "Experience : ",
          value: "1 Year",
        },
        {
          id: 5,
          key: "Address : ",
          value: "Hyderabad, Sindh",
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
        <div class="info-box" key=${ele?.id}>
          <span>${ele?.key}</span>
          <span>${ele?.value}</span>
        </div>
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});
