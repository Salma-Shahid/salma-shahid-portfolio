// footer links

const footerlinks = document.querySelectorAll(".footerlink");
const tabs = document.querySelectorAll(".content");

footerlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
         
          // add active to clicked link

        footerlinks.forEach((l) => {
            if (l === link) {
                l.classList.add("active");
            } else {
                l.classList.remove("active"); // remove active from all links
            }
        });




// Footer Year
document.getElementById("footer-year").textContent = new Date().getFullYear();

// Newsletter form
const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("newsletter-email").value;

  if (!email) {
    return Toastify({
      text: "Please enter a valid email!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: { background: "rgb(206,16,16)" },
    }).showToast();
  }

  Toastify({
    text: "Subscribed successfully!",
    duration: 3000,
    gravity: "top",
    position: "center",
    style: { background: "rgb(9,222,38)" },
  }).showToast();

  newsletterForm.reset();
});
