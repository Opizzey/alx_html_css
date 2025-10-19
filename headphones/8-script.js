document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
      menuIcon.classList.replace("fa-times", "fa-bars");
    }
  });
});
