/* 
toggleTheme is commented out here, so just keep it if you want to activate it later
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');

  const lightModeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Z"/></svg>`;

  const darkModeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Z"/></svg>`;

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = `<b>${lightModeIcon} Light Mode</b>`;
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = `<b>${darkModeIcon} Dark Mode</b>`;
    localStorage.setItem('theme', 'light');
  }
}
*/

function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

const lightModeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Z"/></svg>`;

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    const themeToggle = document.querySelector(".theme-toggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = `<b>${lightModeIcon} Light Mode</b>`;
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            const navMenu = document.querySelector(".nav-menu");
            const hamburger = document.querySelector(".hamburger");
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
            }
        }
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.background = "var(--secondary-color)";
        navbar.style.backdropFilter = "none";
    }
});
