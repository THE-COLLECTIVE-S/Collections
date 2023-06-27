const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const body = document.querySelector("body");
const contrastContainer = document.querySelector("#contrast-container");

let isDraculaTheme = false;

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".options-text").innerText;
    const theme = selectedOption.toLowerCase().replace(" ", "-");
    body.setAttribute("data-theme", theme);
    optionMenu.classList.remove("active");

    // Check if the selected theme is "dracula"
    if (theme === "dracula") {
      isDraculaTheme = true;
    } else {
      isDraculaTheme = false;
    }
  });
});

contrastContainer.addEventListener("click", () => {
  if (isDraculaTheme) {
    body.setAttribute("data-theme", "light sky"); // Revert to the normal theme
    isDraculaTheme = false;
  } else {
    body.setAttribute("data-theme", "dracula"); // Set the theme to Dracula
    isDraculaTheme = true;
  }
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".links");
menu.onclick = () => {
    menu.classList.toggle("bx");
    navbar.classList.toggle("open");
};
