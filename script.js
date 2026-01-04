// menu toggle
const toggle = document.getElementById("menu-toggle");

if (toggle && toggle.checked) {
  document.body.classList.add("no-scroll");
} else {
  document.body.classList.remove("no-scroll");
}

// home section

const words = ["Developer", "Freelancer", "UI/UX Designer", "Video Editor"];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    (typingText.textContent = currentWord.substring(0, charIndex - 1)),
      charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words?.length) type();
});

// navlinks

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // add active to clicked link

    navlinks.forEach((l) => {
      if (l === link) {
        l.classList.add("active");
      } else {
        l.classList.remove("active"); // remove active from all links
      }
    });
    // get tab name
    const tabName = link.dataset.tab;
    // show correct section
    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (tabName === "services") {
      const serviceList = [
        {
          id: 1,
          icon: "ph-code",
          text: "Website Development",
          para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and ...",
        },
        {
          id: 2,
          icon: "ph-figma-logo",
          text: "UI/UX Design",
          para: "I design intuitive, user-centered UI/UX interfaces that improve usability, engagement, accessibility, and overall digital product experience.",
        },
        {
          id: 3,
          icon: "ph-trend-up",
          text: "SEO Optimization",
          para: "I optimize websites for search engines by improving structure, keywords, speed, and content to increase visibility and organic traffic.",
        },
        {
          id: 4,
          icon: "ph-webhooks-logo",
          text: "API Integration Developer",
          para: "I integrate secure, scalable APIs to connect applications, enhance functionality, and ensure seamless data communication across platforms.",
        },
        {
          id: 5,
          icon: "ph-android-logo",
          text: "App Development Services",
          para: "I develop high-performance mobile applications with modern frameworks, focusing on usability, scalability, and cross-platform compatibility.",
        },
        {
          id: 6,
          icon: "ph-headset",
          text: "24/7 Support",
          para: "I provide reliable 24/7 technical support, maintenance, and updates to ensure smooth performance and long-term project success.",
        },
      ];

      const services = document.getElementsByClassName("service-list");

      const innerContent = serviceList
        .map((l) => {
          return `
         <div class="box" key=${l.id}>
            <div class="head-icons">
              <i class="ph ${l?.icon}"></i>
              <span><i class="ph ph-arrow-circle-right"></i></span>
            </div>
            <h3>${l?.text}</h3>
            <span class="spacer"></span>
            <p>
              ${l?.para}
            </p>
          </div>
         
        `;
        })
        .join("");

      Array.from(services).forEach((ele) => {
        ele.innerHTML = innerContent;
      });
    }

    toggle.checked = false;
  });
});
